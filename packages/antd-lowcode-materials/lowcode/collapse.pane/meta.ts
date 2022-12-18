// FIXME: 选中tabPane点复制，会出问题，因为复制的组件key一样

export default {
  componentName: 'Collapse.Panel',
  title: 'Collapse.Panel',
  category: '',
  props: [
    {
      name: 'key',
      title: {
        label: 'key',
        tip: 'key',
      },
      propType: 'string',
      setter: 'StringSetter',
      supportVariable: true
    },
    {
      name: 'header',
      title: {
        label: 'Title',
        tip: 'Title',
      },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },

    {
      name: 'extra',
      title: {
        label: 'extra',
        tip: 'Custom rendering of content in the upper right corner of each panel',
      },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'collapsible',
      title: 'collapsible',
      propType: {
        type: 'oneOf',
        value: ['-', 'header', 'disabled'],
      },
    },
    {
      name: 'showArrow',
      title: {
        label: 'showArrow',
        tip: 'Whether to show the arrows on the current panel',
      },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter',
      supportVariable: true
    },
    {
      name: 'forceRender',
      title: {
        label: 'forceRender',
        tip: 'Whether to render the DOM structure when hidden',
      },
      propType: 'bool',
      setter: 'BoolSetter',
      supportVariable: true
    },
  ],
  configure: {
    component: {
      isContainer: true,
      nestingRule: {
        parentWhitelist: ['Collapse'],
      },
    },
  },
};
