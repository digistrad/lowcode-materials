import snippets from './snippets';

export default {
  snippets,
  componentName: 'ConfigProvider',
  title: 'ConfigProvider',
  category: 'Others',
  props: [
    {
      name: 'autoInsertSpaceInButton',
      title: {
        label: 'autoInsertSpaceInButton',
        tip: 'Automatically insert a space between 2 Chinese characters in a button',
      },
      propType: 'bool',
      defaultValue: true,
    },
    {
      name: 'componentSize',
      title: { label: 'componentSize', tip: 'set antd component size' },
      propType: { type: 'oneOf', value: ['small', 'middle', 'large'] },
      default: 'middle',
    },
    {
      name: 'csp',
      title: {
        label: 'CSP',
        tip: 'Set Content Security Policy configuration',
      },
      propType: 'object',
      setter: 'JsonSetter',
    },
    {
      name: 'form',
      title: {
        label: 'form',
        tip: 'Set common properties of the Form component',
      },
      propType: 'object',
      setter: 'JsonSetter',
    },
    {
      name: 'input',
      title: {
        label: 'input',
        tip: 'Set common properties of the Input component',
      },
      propType: 'object',
      setter: 'JsonSetter',
    },
    // {
    //   name: 'renderEmpty',
    //   title: { label: '自定义组件空状态', tip: '自定义组件空状态' },
    //   propType: 'func',
    // },
    {
      name: 'getPopupContainer',
      title: {
        label: 'getPopupContainer',
        tip: 'The pop-up box renders the parent node, which is rendered on the body by default.',
      },
      propType: 'func',
    },
    {
      name: 'getTargetContainer',
      title: {
        label: 'getTargetContainer',
        tip: 'Configure Affix, Anchor scrolling monitor container.',
      },
      propType: 'func',
    },
    {
      name: 'locale',
      title: { label: 'locale', tip: 'language' },
      propType: {
        type: 'oneOf',
        value: ['en-US'],
      },
      defaultValue: 'en-US',
    },
    {
      name: 'prefixCls',
      title: {
        label: 'prefixCls',
        tip: 'Set the uniform style prefix. `Note: this will not apply the default styles provided by antd`',
      },
      propType: 'string',
    },
    {
      name: 'pageHeader',
      title: {
        label: 'pageHeader',
        tip: 'Uniformly set the ghost of PageHeader',
      },
      propType: 'object',
      setter: 'JsonSetter',
    },
    {
      name: 'direction',
      title: { label: 'direction', tip: 'Set text display direction' },
      propType: { type: 'oneOf', value: ['ltr', 'rtl'] },
    },
    {
      name: 'space',
      title: { label: 'space', tip: 'Set the `size` of the Space' },
      propType: {
        type: 'oneOf',
        value: ['small', 'middle', 'large', 'number'],
      },
    },
    {
      name: 'virtual',
      title: {
        label: 'virtual',
        tip: 'Disable virtual scrolling when set to `false`',
      },
      propType: 'bool',
      defaultValue: true,
    },
    {
      name: 'dropdownMatchSelectWidth',
      title: { label: 'dropdownMatchSelectWidth', tip: 'The dropdown menu has the same width as the selector' },
      propType: { type: 'oneOfType', value: ['bool', 'number'] },
    },
  ],
  configure: { component: { isContainer: true } },
};
