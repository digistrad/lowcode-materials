import snippets from './snippets';

export default {
  group: 'Atomic',
  componentName: 'Icon',
  title: '图标',
  docUrl: '',
  screenshot:
    'https://img.alicdn.com/imgextra/i1/O1CN01yR8vcY1M504YbHxzo_!!6000000001382-55-tps-56-56.svg',
  icon:
    'https://img.alicdn.com/imgextra/i1/O1CN01yR8vcY1M504YbHxzo_!!6000000001382-55-tps-56-56.svg',
  npm: {
    package: '@alifd/next',
    version: '{{version}}',
    exportName: 'Icon',
    main: '',
    destructuring: true,
    subName: '',
  },
  props: [
    {
      name: 'type',
      propType: 'string',
      description: '指定显示哪种图标',
    },
    {
      name: 'size',
      title: {
        label: {
          type: 'i18n',
          zh_CN: '图标尺寸',
          en_US: 'Icon Size',
        },
        tip: {
          type: 'i18n',
          zh_CN: '属性: size | 说明: 指定图标大小',
          en_US: 'prop: size | description: icon size',
        },
      },
      propType: {
        type: 'oneOfType',
        value: [
          {
            type: 'oneOf',
            value: ['xxs', 'xs', 'small', 'medium', 'large', 'xl', 'xxl', 'xxxl', 'inherit'],
          },
          'number',
        ],
      },
      description: '指定图标大小',
      defaultValue: 'medium',
    },
    {
      name: 'className',
      propType: 'string',
    },
    {
      name: 'style',
      propType: 'object',
    },
  ],
  configure: {
    props: [
      {
        name: 'type',
        title: {
          label: {
            type: 'i18n',
            zh_CN: '图标类型',
            en_US: 'Icon',
          },
          tip: {
            type: 'i18n',
            zh_CN: '属性: type | 说明: 图标类型',
            en_US: 'prop: type | description: icon type',
          },
        },
        setter: {
          componentName: 'IconSetter',
          props: {
            hasClear: false,
          },
        },
      },
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            zh_CN: '图标尺寸',
            en_US: 'Icon Size',
          },
          tip: {
            type: 'i18n',
            zh_CN: '属性: size | 说明: 指定图标大小',
            en_US: 'prop: size | description: icon size',
          },
        },
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                label: 'xxs',
                value: 'xxs',
              },
              {
                label: 'xs',
                value: 'xs',
              },
              {
                label: 'small',
                value: 'small',
              },
              {
                label: 'medium',
                value: 'medium',
              },
              {
                label: 'large',
                value: 'large',
              },
              {
                label: 'xl',
                value: 'xl',
              },
              {
                label: 'xxl',
                value: 'xxl',
              },
              {
                label: 'xxxl',
                value: 'xxxl',
              },
              {
                label: 'inherit',
                value: 'inherit',
              },
            ],
          },
        },
        description: '指定图标大小',
        defaultValue: 'medium',
      },
    ],
    advanced: {
      callbacks: {
        onHoverHook: (target) => {
          return !target?.exportSchema()?.props?.disabled;
        },
        onMouseDownHook: (target) => {
          return !target?.exportSchema()?.props?.disabled;
        },
        onClickHook: (target) => {
          return !target?.exportSchema()?.props?.disabled;
        },
        onMove: (target) => {
          return !target?.exportSchema()?.props?.disabled;
        },
      },
    },
  },
  category: 'Universal',
  snippets,
};
