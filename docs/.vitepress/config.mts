import { defineConfig } from 'vitepress';
import pkg from '../../package.json';
// import { handleSidebar } from './handleSidebar.mjs';
import navigation from './navigation.json';

export default defineConfig({
  description: '一个开箱即用的 Javascript 工具库',
  base: '/',
  appearance: 'dark',
  markdown: {
    lineNumbers: true
  },
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh',
      dir: '/',
      title: 'TianJie',
      description: '一个开箱即用的 Javascript 工具库'
    }
  },
  lastUpdated: true,
  themeConfig: {
    sidebar: { '/src/': navigation },
    outline: {
      level: [2, 4],
      label: 'On this page'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present loclink'
    },
    nav: [
      {
        text: `v${pkg.version}`,
        link: '/'
      }
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/loclink/tianjie'
      }
    ],
    search: {
      provider: 'local',
      options: {
        _render(src, env, md) {
          const html = md.render(src, env);
          if (env.frontmatter?.search === false) return '';
          if (env.relativePath.startsWith('docs/modules')) return '';
          return html;
        },
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    }
  }
});
