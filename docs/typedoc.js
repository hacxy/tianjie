// doc/typedoc.js
const TypeDoc = require('typedoc');
const path = require('path');
const fs = require('fs');
// 根目录
function rootPath(...args) {
  return path.join(__dirname, '..', ...args);
}

/** 生成 sidebar 目录配置项 */
async function resolveConfig(jsonDir) {
  const result = [];

  // 读取文档数据结构的 json 文件
  const buffer = await fs.promises.readFile(jsonDir, 'utf8');
  const data = JSON.parse(buffer.toString());
  if (!data.children || data.children.length <= 0) {
    return;
  }

  // Module 作为一级导航
  const moduleConfig = {
    text: data.name,
    items: []
  };

  const sidebarData = data.groups.map((item) => {
    item.children = item.children.map((childId) => {
      return data.children.find((childItem) => childItem.id === childId);
    });
    return item;
  });

  sidebarData.forEach((sidebarItem) => {
    moduleConfig.items.push({
      text: sidebarItem.title,
      collapsed: true,
      items: sidebarItem.children.map((sub) => {
        switch (sub.kind) {
          case 128:
            return { text: `[C] ${sub.name}`, link: getClassPath(sub.name) };
          case 256:
            return { text: `[I] ${sub.name}`, link: getInterfacePath(sub.name) };
          case 4194304:
            return { text: `[T] ${sub.name}`, link: getTypePath(sub.name) };
          case 64:
            return { text: `[F] ${sub.name}`, link: getFunctionPath(sub.name) };
          case 8:
            return { text: `[E] ${sub.name}`, link: getEnumPath(sub.name) };
        }
      })
    });
  });

  result.push(moduleConfig);

  // 转换成的导航数据输出到 doc/apidocConfig.json
  await fs.promises.writeFile(path.join(__dirname, 'apidocConfig.json'), JSON.stringify(result), 'utf8');
}

// function transformModuleName(name) {
//   return name.replace(/\//g, '_');
// }

// function getModulePath(name) {
//   return path.join('/dist/modules', `${transformModuleName(name)}`).replace(/\\/g, '/');
// }

function getClassPath(className) {
  return path.join('/docs/classes', `${className}`).replace(/\\/g, '/');
}

function getInterfacePath(interfaceName) {
  return path.join('/docs/interfaces', `${interfaceName}`).replace(/\\/g, '/');
}

function getTypePath(typeName) {
  return path.join('/docs/types', `${typeName}`).replace(/\\/g, '/');
}

function getFunctionPath(functionName) {
  return path.join('/docs/functions', `${functionName}`).replace(/\\/g, '/');
}

function getEnumPath(enumName) {
  return path.join('/docs/enums', `${enumName}`).replace(/\\/g, '/');
}

// 主函数
async function main() {
  // 初始化 TypeDoc
  const app = new TypeDoc.Application();

  // 使 TypeDoc 拥有读取 tsconfig.json 的能力
  app.options.addReader(new TypeDoc.TSConfigReader());

  // 指定代码入口
  const entries = [rootPath('src/index.ts')];

  // 指定 TypeDoc 配置项
  await app.bootstrapWithPlugins({
    entryPoints: entries,
    tsconfig: rootPath('tsconfig.json'),
    plugin: ['typedoc-plugin-markdown'],
    allReflectionsHaveOwnDocument: true,
    hideBreadcrumbs: true
    // namedAnchors: true,
    // preserveAnchorCasing: true
    // readme: 'none'
  });

  const handleDocForProject = async (project) => {
    if (project) {
      let fnItem;
      project.groups.map((item, index, arr) => {
        // console.log(item.children[0].sources);
        if (item.title === 'Interfaces') {
          item.title = '接口';
          arr[index] = item;
        }
        if (item.title === 'Functions') {
          item.title = '其他方法';
          fnItem = item;
          arr.splice(index, 1);
        }
        if (item.title === 'Type Aliases') {
          item.title = '类型';
          arr[index] = item;
        }
      });
      project.groups.push(fnItem);

      // 输出产物位置
      const outputDir = path.join(__dirname, 'docs');

      // 生成文档内容
      await app.generateDocs(project, outputDir);

      // 生成文档数据结构
      const jsonDir = path.join(outputDir, 'documentation.json');
      await app.generateJson(project, jsonDir);

      // 解析数据结构，生成 VitePress Config 所需的 Sidebar 配置项
      await resolveConfig(jsonDir);
    }
  };

  // 处理汉化
  const handleChinesize = (project) => {
    project.children.map((projectItem) => {
      projectItem.signatures?.map((signaturesItem) => {
        signaturesItem.comment.blockTags?.map((tagItem, index, blockTagsArr) => {
          if (tagItem.tag === '@name') {
            tagItem.content.map((nameTagItem) => {
              signaturesItem.comment.summary.push({ ...nameTagItem, text: `## ${nameTagItem.text}` });
            });
            blockTagsArr.splice(index, 1);
          }
        });

        // signaturesItem.comment.blockTags?.map((tagItem) => {
        //   if (tagItem.tag === '@returns') {
        //     console.log(tagItem);
        //     tagItem.tag = 'aaaaaaaaaaaaaaaaaa';
        //   }
        // });

        signaturesItem.comment.blockTags?.map((tagItem, index, blockTagsArr) => {
          if (tagItem.tag === '@example') {
            tagItem.content.map((nameTagItem) => {
              signaturesItem.comment.summary.push({ ...nameTagItem, text: `\n #### 示例\n ${nameTagItem.text}` });
            });
            blockTagsArr.splice(index, 1);
          }
        });

        // console.log(signaturesItem, '---------------');
        // signaturesItem.parameters = []; // 参数
        // console.log(signaturesItem.comment.summary);
      });
    });
  };
  // 判断是否为监听模式
  if (process.argv.includes('-w') || process.argv.includes('--watch')) {
    app.convertAndWatch(async (project) => {
      handleChinesize(project);
      handleDocForProject(project);
    });
  } else {
    const project = app.convert();
    handleChinesize(project);
    handleDocForProject(project);
  }
}

main().catch(console.error);
