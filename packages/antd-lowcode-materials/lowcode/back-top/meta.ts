import snippets from './snippets';

export default {
  snippets,
  componentName: 'BackTop',
  title: 'BackTop',
  category: 'Other',
  props: [
    {
      name: 'target',
      title: {
        label: 'target',
        tip: 'Set the element whose scroll event needs to be monitored, and the value is a function that returns the corresponding DOM element',
      },
      propType: 'func',
    },
    {
      name: 'visibilityHeight',
      title: {
        label: 'visibilityHeight',
        tip: 'It will only appear when the scroll height reaches this parameter value BackTop',
      },
      propType: 'number',
    },
    {
      name: 'onClick',
      title: { label: 'onClick', tip: 'Callback function for button click' },
      propType: 'func',
    },
    {
      name: 'duration',
      title: { label: 'duration', tip: 'Time required to return to the top (ms)' },
      propType: 'number',
    },
  ],
  configure: {
    supports: {
      style: true,
      events: [
        {
          name: 'onClick',
          template: "onClick(${extParams}){\n//The callback function of clicking the button\nconsole.log('onClick');}",
        },
      ],
    },
  },
};
