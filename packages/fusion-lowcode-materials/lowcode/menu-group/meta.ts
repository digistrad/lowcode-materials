module.exports = {
  group: 'Atomic',
  componentName: 'Menu.Group',
  title: '菜单组',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alifd/next',
    version: '{{version}}',
    exportName: 'Menu',
    main: '',
    destructuring: true,
    subName: 'Group',
  },
  props: [
    {
      name: 'label',
      propType: {
        type: 'instanceOf',
        value: 'node',
      },
      description: '标签内容',
    },
    {
      name: 'style',
      propType: 'object',
    },
  ],
  configure: {
    component: {
      isContainer: true,
      nestingRule: {
        parentWhitelist: ['Menu', 'SubMenu', 'Menu.Group', 'MenuButton'],
      },
    },
    advanced: {
      callbacks: {
        onHoverHook: () => false,
        onMouseDownHook: () => false,
        onClickHook: () => false,
        onMove: () => false,
      },
    },
  },
  icon: '',
  category: 'Input',
};
