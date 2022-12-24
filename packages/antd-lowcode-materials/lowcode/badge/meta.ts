import snippets from './snippets';

export default {
  snippets,
  componentName: 'Badge',
  title: 'Badge',
  category: 'Display',
  props: [
    {
      name: 'color',
      title: { label: 'color', tip: 'Customize the color of the dots' },
      propType: 'string',
    },
    {
      name: 'count',
      title: {
        label: 'count',
        tip: 'The displayed number, when it is greater than overflowCount, it will be displayed as `${overflowCount}+`, and when it is 0, it will be hidden',
      },
      propType: 'node',
    },
    {
      name: 'dot',
      title: {
        label: 'dot',
        tip: 'No numbers are displayed, only a small red dot',
      },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'offset',
      title: {
        label: 'offset',
        tip: 'Set the position offset of the status point [number, number]',
      },
      propType: { type: 'arrayOf', value: 'number' },
    },
    {
      name: 'overflowCount',
      title: { label: 'overflowCount', tip: 'display capped numeric value' },
      propType: 'number',
    },
    {
      name: 'showZero',
      title: {
        label: 'showZero',
        tip: 'Whether to display Badge when the value is 0',
      },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'status',
      title: { label: 'status', tip: 'Set Badge as status point' },
      propType: {
        type: 'oneOf',
        value: ['success', 'processing', 'default', 'error', 'warning'],
      },
    },
    {
      name: 'text',
      title: {
        label: 'text',
        tip: 'Valid when `status` is set, set the text of the status point',
      },
      condition(target) {
        return !!target.getProps().getPropValue('status');
      },
      propType: 'string',
    },
    {
      name: 'title',
      title: {
        label: 'title',
        tip: 'Set the text displayed when the mouse is placed on the status point',
      },
      propType: 'string',
    },
  ],
  configure: { supports: { style: true } },
};
