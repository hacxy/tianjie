/** @type {import('typedoc').TypeDocOptions & import('typedoc-plugin-markdown').PluginOptions} */
module.exports = {
  entryPoints: ['./src/index.ts'],
  out: 'docs/src',
  plugin: ['typedoc-plugin-markdown', './docs/.vitepress/theme/typedoc-theme.mjs'],
  theme: 'themeExpand',
  hideBreadcrumbs: true,
  parametersFormat: 'table',
  typeDeclarationFormat: 'table',
  textContentMappings: {
    'label.returns': '返回值:',
    'label.name': '名称',
    'label.defaultValue': '默认值',
    'kind.function.plural': '函数',
    'kind.function.singular': '函数',
    'kind.parameter.singular': '参数',
    'kind.parameter.plural': '参数'
  },
  namedAnchors: true
};
