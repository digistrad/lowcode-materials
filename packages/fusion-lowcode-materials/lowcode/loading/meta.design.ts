import snippets from './snippets';

export default {
  group: 'Atomic',
  componentName: 'Loading',
  title: '加载',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alifd/next',
    version: '{{version}}',
    exportName: 'Loading',
    main: '',
    destructuring: true,
    subName: '',
  },
  props: [
    {
      name: 'tip',
      propType: 'string',
      description: '自定义内容',
    },
    {
      name: 'tipAlign',
      propType: {
        type: 'oneOf',
        value: ['right', 'bottom'],
      },
      description: '自定义内容位置',
      defaultValue: 'bottom',
    },
    {
      name: 'visible',
      propType: 'bool',
      description: 'loading 状态, 默认 true',
      defaultValue: true,
    },
    {
      name: 'onVisibleChange',
      propType: 'func',
    },
    {
      name: 'className',
      propType: 'string',
      description: '自定义class',
    },
    {
      name: 'style',
      propType: 'object',
      description: '自定义内联样式',
    },
    {
      name: 'size',
      propType: {
        type: 'oneOf',
        value: ['large', 'medium'],
      },
      description: '设置动画尺寸\n@description 仅仅对默认动画效果起作用\n@enumdesc 大号, 中号',
      defaultValue: 'large',
    },
    {
      name: 'color',
      propType: 'string',
      description: '动画颜色',
    },
    {
      name: 'fullScreen',
      propType: 'bool',
      description: '全屏展示',
    },
    {
      name: 'inline',
      title: 'inline',
      propType: 'bool',
      description: 'should loader be displayed inline',
      defaultValue: true,
    },
  ],
  configure: {
    component: {
      isContainer: true,
    },
    props: [
      {
        name: 'tip',
        title: {
          label: '自定义内容',
          tip: '',
        },
        setter: 'StringSetter',
      },
      {
        name: 'tipAlign',
        title: {
          label: '内容位置',
          tip: '自定义内容位置',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: '动画右边',
                value: 'right',
              },
              {
                title: '动画下面',
                value: 'bottom',
              },
            ],
          },
        },
      },
      {
        name: 'size',
        title: {
          label: '动画尺寸',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: '大',
                value: 'large',
              },
              {
                title: '中',
                value: 'medium',
              },
            ],
          },
        },
      },
      {
        name: 'color',
        title: '动画颜色',
        setter: {
          componentName: 'ColorSetter',
        },
      },
      {
        name: 'visible',
        title: {
          label: '是否显示',
        },
        setter: 'BoolSetter',
      },
      {
        name: 'fullScreen',
        title: '全屏显示',
        setter: 'BoolSetter',
      },
      {
        name: 'inline',
        title: '行内显示',
        setter: 'BoolSetter',
      },
    ],
    supports: {
      style: true,
      events: ['onVisibleChange'],
    },
  },
  icon: '',
  category: 'Feedback',
  snippets,
};
