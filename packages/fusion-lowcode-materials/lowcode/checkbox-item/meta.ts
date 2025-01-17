module.exports = {
  group: 'Atomic',
  componentName: 'CheckboxItem',
  title: '复选框',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alifd/next',
    version: '{{version}}',
    exportName: 'Menu',
    main: '',
    destructuring: true,
    subName: 'CheckboxItem',
  },
  props: [
    {
      name: 'checked',
      propType: 'bool',
      description: '是否选中',
      defaultValue: false,
    },
    {
      name: 'indeterminate',
      propType: 'bool',
      description: '是否半选中',
      defaultValue: false,
    },
    {
      name: 'disabled',
      propType: 'bool',
      description: '是否禁用',
      defaultValue: false,
    },
    {
      name: 'onChange',
      propType: 'func',
      description:
        '选中或取消选中触发的回调函数\n@param {Boolean} checked 是否选中\n@param {Object} event 选中事件对象',
    },
    {
      name: 'helper',
      propType: 'node',
      description: '帮助文本',
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
  },
  icon: '',
  category: 'Input',
};
