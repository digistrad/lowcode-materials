module.exports = {
  componentName: 'Image',
  title: '图片',
  npm: {
    package: '@dslc/lowcode-materials',
    version: 'latest',
    exportName: 'Image',
    main: '',
    destructuring: true,
    subName: '',
  },
  props: [
    {
      name: 'src',
      title: {
        label: {
          type: 'i18n',
          zh_CN: '图片链接',
          en_US: 'Image Address',
        },
        tip: {
          type: 'i18n',
          zh_CN: '属性: src | 说明: 图片链接',
          en_US: 'prop: src | description: image address',
        },
      },
      propType: 'string',
      defaultValue: 'https://img.alicdn.com/tps/TB16TQvOXXXXXbiaFXXXXXXXXXX-120-120.svg',
    },
    {
      name: 'title',
      title: {
        label: {
          type: 'i18n',
          zh_CN: 'Title',
          en_US: 'Title',
        },
      },
      propType: 'string',
    },
    {
      name: 'alt',
      title: {
        label: {
          type: 'i18n',
          zh_CN: '代替文本',
          en_US: 'Alt',
        },
      },
      propType: 'string',
    },
    {
      name: 'style',
      propType: 'object',
    },
  ],
  icon: 'https://img.alicdn.com/imgextra/i3/O1CN01tnhXhk1GUIFhsXwzA_!!6000000000625-55-tps-56-56.svg',
  category: 'Basic',
  group: 'Featured',
  snippets: require('./snippets'),
};
