module.exports = {
  group: 'Atomic',
  componentName: 'PopupItem',
  title: 'PopupItem',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alifd/next',
    version: '{{version}}',
    exportName: 'Nav',
    main: '',
    destructuring: true,
    subName: 'PopupItem',
  },
  props: [
    {
      name: 'className',
      propType: 'string',
      description: '自定义类名',
    },
    {
      name: 'icon',
      propType: {
        type: 'oneOfType',
        value: [
          'string',
          {
            type: 'instanceOf',
            value: 'node',
          },
        ],
      },
      description: '自定义图标，可以使用 Icon 的 type, 也可以使用组件 `<Icon type="icon type" />`',
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
      description: '弹出内容',
    },
    {
      name: 'style',
      propType: 'object',
    },
  ],
  category: 'Base',
};
