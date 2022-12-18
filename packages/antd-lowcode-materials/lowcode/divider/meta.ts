import snippets from './snippets';

export default {
  snippets,
  componentName: 'Divider',
  title: 'Divider',
  category: 'Layout',
  props: [
    {
      name: 'className',
      title: { label: 'className', tip: 'className' },
      propType: 'string',
    },
    {
      name: 'dashed',
      title: { label: 'dashed', tip: 'dashed' },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'orientation',
      title: { label: 'orientation', tip: 'orientation' },
      propType: { type: 'oneOf', value: ['left', 'right', 'center'] },
    },
    {
      name: 'orientationMargin',
      title: {
        label: 'orientationMargin',
        tip:
          'The distance between the title and the nearest left/right border, the dividing line is removed, and the orientation must be left or right',
      },
      propType: { type: 'oneOfType', value: ['string', 'number'] },
    },
    {
      name: 'style',
      title: { label: 'style', tip: 'style' },
      propType: 'object',
    },
    {
      name: 'type',
      title: { label: 'type', tip: 'horizontal or vertical type' },
      propType: { type: 'oneOf', value: ['horizontal', 'vertical'] },
    },
    {
      name: 'plain',
      title: {
        label: 'plain',
        tip: 'Whether the text is displayed in normal text style',
      },
      propType: 'bool',
      defaultValue: false,
    },
  ],
  configure: {
    component: {
      isContainer: true,
    },
    supports: { style: true, className: true },
  },
};
