module.exports = {
  group: 'Atomic',
  componentName: 'Group',
  title: 'Group',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alifd/next',
    version: '{{version}}',
    exportName: 'Nav',
    main: '',
    destructuring: true,
    subName: 'Group',
  },
  props: [
    {
      name: 'className',
      propType: 'string',
      description: '自定义类名',
    },
    {
      name: 'label',
      propType: {
        type: 'instanceOf',
        value: 'node',
      },
      description: '标签内容',
    },
    {
      name: 'children',
      propType: {
        type: 'instanceOf',
        value: 'node',
      },
      description: '导航项和子导航',
    },
    {
      name: 'style',
      propType: 'object',
    },
  ],
  category: 'Base',
};
