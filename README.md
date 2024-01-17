# wm-kit

## 概述：

武汉美萌 Javascript 工具库。致力于打造一个日常开发中常用并且通用的前端工具库，拒绝重复造轮子。

> 若您也想为其添砖加瓦，请阅读： [开发者模式](#开发者模式)

文档速览：[wm-kit](http://frontdoc.develop.meimob.com/)

## 特征：

- 开箱即用，支持 CDN、ESM、CommonJs 三种导入方式。
- 使用 typescript 开发，具备完整的类型推导
- 代码即文档，无需繁琐的配置，完全专注于逻辑层的实现
- 更加便携的单元测试流程

## 快速开始：

### monorepo 项目中使用

在monorepo组织管理的项目中，您可以使用`git`工具将项目clone至您的工作区内，例如您的工作区是以下目录：

```

packages:
  - 'packages/*'
  - 'components/**'
  - 'modules/**/**'
  - '!**/test/**'
```

正常情况下：

- packages 目录存放的是业务项目
- components 存放的是组件库
- modules 存放公共的工具库

也就是说我们只需要使用 git 工具将项目 clone 至 modules 目录下即可，当您具有仓库访问权限时，您可以使用以下两种方式将仓库clone至本地的modules目录下：

```sh
# ssh 地址
git clone git@codeup.aliyun.com:5f855dfb1858a17210466fd0/wuhang-meimeng-development/wm-kit.git
```

```sh
# https 地址
git clone https://codeup.aliyun.com/5f855dfb1858a17210466fd0/wuhang-meimeng-development/wm-kit.git

```

克隆至本地完成以后，您需要在您的业务项目中添加开发时依赖，版本号为："workspace:"：

```json
// package.json

{
  "dependencies": {
    // ... more
    "wm-kit": "workspace:"
  }
}
```

之后在项目根目录下执行 `pnpm install` 即可

### 非 monorepo 项目中使用

若您的项目不是monorepo架构，那么可以通过软连接的方式来安装项目。

首先将代码克隆至任意目录下。

然后cd进入`wm-kit`根目录，执行命令，这一操作是创建软链接至全局:

```sh
pnpm link --global
```

之后在需要使用`wm-kit`的项目的根目录下执行命令，这一操作表示，从全局将 wm-kit 软链至此项目：

```sh
pnpm link wm-kit --global
```

随后就可以在项目中使用ESM方式导入`wm-kit`下所有模块了:

```ts
import { isNumber } from 'wmkit';
```

## 贡献代码

### 前言：

感谢您选择为工具库添砖加瓦，`wm-kit`的开发模式能让您尝试到代码即文档的丝滑开发体验。`wm-kit` 的开发模式与您平时开发项目时封装工具函数无异，不会让您感觉到繁琐且不易于掌握，但需要您严格遵守以下开发规范：

- 所有模块都应在 `src/modules/` 下根据函数处理入参出参的数据类型来划分目录结构，例如：`src/modules/string` 处理字符串类型的方法都应存放至此目录下，并由 `src/modules/string/index.ts` 文件统一导出。
- `wm-kit`在打包构建文档时，入口文件为：`src/index.ts`，所以需要在此文件中将所有模块统一按照 `re-export` 方式导出，也就是重新导出一个模块的所有成员。如：`export * from './modules/date';`

  > **但需要注意的是，使用此方式导出时，请勿为其加上别名，因为 typedoc 在生成 markdown 文档时对此导出方式做了特殊判断，但并未兼容类似：`export * as date from './modules/date` 这种以别名导出的方式。请务必使用`export * from './modules/date'` 语法导出模块下所有方法。**

- `wm-kit` 将自动的把注释内容生成`markdown`文档，并由`vitepress`驱动，所以为了方便其他人阅读和使用，您需要将您编写的所有方法都加入注释，并且严格遵守 [tsdoc](https://tsdoc.org/) 规范，此外，注释中可以使用 `markdown` 语法来修饰以及丰富文档内容，理论上支持所有 [`vitepress`提供的特殊`markdown`语法](https://vitepress.dev/guide/markdown)。

- 所有方法都应在注释中加入 `@group` 分组标签并在其标签后标注**组名**，以及使用 `@author` 标注作者，项目在 CI/CD 步骤时，`typedoc`将会根据@group 标注的名称，在`vitepress`生成对应侧边栏菜单，组名可以存在多个，这将会生成多个侧边菜单并同时包含此方法。使用@author标注作者将会有效保证后期维护和迭代优化工作：

  ````ts
  /**
   * ### 将字符串格式化为首字母大写
   * @group 格式化
   * @author 高强
   * @param str 需要格式化的字符串
   * @returns
   *
   * ### 示例
   * ``` ts
   * import { formatInitialCapital } from 'wm-kit'
   * formatInitialCapital('javascript') // => Javascript
   * ```
   */
  export const formatInitialCapital = (str: string) => {
    let firstLetter = str.charAt(0).toUpperCase();
    let restOfStr = str.slice(1).toLowerCase();
    return firstLetter + restOfStr;
  };
  ````

  在此示例中，`@group 格式化`会将“格式化”作为一级侧边菜单名称并将该方法作为它的子菜单。

- 所有方法都应该是**纯函数**，保证函数体内所有逻辑不会对入参产生副作用

- 所有函数中所依赖的变量都应该有明确的类型，而不是 `any`，并且所有被使用过的类型、枚举以及接口都应在 `src/index.ts`文件中统一被导出。

- 代码提交请按照 [Angular 信息提交规范](https://zj-git-guide.readthedocs.io/zh_CN/latest/message/Angular%E6%8F%90%E4%BA%A4%E4%BF%A1%E6%81%AF%E8%A7%84%E8%8C%83/) 来提交信息：

  ```json
  {
    "types": [
      { "type": "feat", "section": "✨ Features | 新功能" },
      { "type": "fix", "section": "🐛 Bug Fixes | Bug 修复" },
      { "type": "perf", "section": "⚡ Improvements | 优化" },
      { "type": "revert", "section": "⏪ Reverts | 回退" },
      { "type": "chore", "section": "📦 Chores | 其他更新" },
      { "type": "docs", "section": "📝 Documentation | 文档" },
      { "type": "style", "section": "💄 Styles | 风格" },
      { "type": "refactor", "section": "♻ Code Refactoring | 代码重构" },
      { "type": "test", "section": "✅ Tests | 测试" },
      { "type": "build", "section": "👷‍ Build System | 构建" },
      { "type": "ci", "section": "🔧 Continuous Integration | CI 配置" }
    ]
  }
  ```

  例如，新增方法：`formatInitialCapital`， 则提交信息如下：

  ```sh
    git commit -m 'feat: 新增首字母转大写方法:formatInitialCapital'
  ```

  将 `feat: `作为前缀。

- 新增方法都应在 `test/modules/` 目录下编写单元测试用例，并使用 `npm run test` 对其测试，单元测试的文件名统一以`spec.ts`作为后缀。

### 发布

开发完成后，您只需要将您新增的部分提交并推送至main主分支即可，推送成功后，Jenkins会自动将文档进行部署，这个部署的过程大概会持续2-3分钟。

### 文档构建原理

文档的构建过程完全依赖于 `TypeDoc` ，这个第三方库还依赖了插件 `typedoc-plugin-markdown`, 目的是为了将代码中的注释内容构建为markdown文件 .

解析过程为手动调用函数的方式对文档进行解析，参考：`docs/typedoc.js`

为了文档美观度和高度可定制化，我还采用了vitepress作为markdown文档驱动器

当执行命令`npm run dev:docs` 时, 会执行 `docs/typedoc.js` 构建markdown产物，然后通过vitepress启动dev模式，这样就达到了预览文档的效果

当执行命令`npm run build:docs` 时，同样会首先执行：`docs/typedoc.js`, 构建markdown产物，然后通过vitepress将markdown打包为web静态资源

当代码推送至公司远程仓库的main分支时，jenkins会自动完成文档部署操作

### 发布至npm仓库

发布工具我使用了：`release-it`, 执行`npm run release`将执行发布命令，之后根据选项可以做到：自动为该分支带上版本号标签、自动生成CHANGELOG、自动增长版本号、自动将本次修改提交、自动推送以及自动发布至npm仓库
