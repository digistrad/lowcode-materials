module.exports = {
  group: 'Atomic',
  componentName: 'CardCollaspeContent',
  title: 'CardCollaspeContent',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alifd/next',
    version: '{{version}}',
    exportName: 'Card',
    main: '',
    destructuring: true,
    subName: 'CollaspeContent',
  },
  props: [
    {
      name: 'prefix',
      propType: 'string',
      defaultValue: 'next-',
    },
    {
      name: 'contentHeight',
      propType: {
        type: 'oneOfType',
        value: ['string', 'number'],
      },
      description: '内容区域的固定高度',
      defaultValue: 120,
    },
    {
      name: 'locale',
      propType: 'object',
    },
    {
      name: 'children',
      propType: {
        type: 'instanceOf',
        value: 'node',
      },
    },
    {
      name: 'style',
      propType: 'object',
    },
  ],
  category: 'Base',
};
