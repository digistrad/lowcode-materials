import snippets from './snippets';

export default {
  snippets,
  componentName: 'Affix',
  title: 'Affix',
  category: 'Navigation',
  props: [
    {
      name: 'offsetBottom',
      title: { label: 'offsetBottom', tip: 'Triggered when the specified offset is reached from the bottom of the window' },
      propType: 'number',
    },
    {
      name: 'offsetTop',
      title: { label: 'offsetTop', tip: 'Triggered when the specified offset is reached from the top of the window' },
      propType: 'number',
    },
    {
      name: 'target',
      title: {
        label: 'target',
        tip: 'Set the element that `Affix` needs to listen to its scroll event, the value is a function that returns the corresponding DOM element',
      },
      propType: 'func',
    },
    {
      name: 'onChange',
      title: { label: 'onChange', tip: 'Callback function triggered when fixed state changes' },
      propType: 'func',
    },
  ],
  configure: {
    supports: {
      style: true,
      events: [
        {
          name: 'onChange',
          template:
            "onChange(affixed,${extParams}){\n// Fixed state change callback function\nconsole.log('onChange', affixed);}",
        },
      ],
    },
  },
};
