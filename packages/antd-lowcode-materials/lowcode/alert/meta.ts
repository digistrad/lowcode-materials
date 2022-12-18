import snippets from './snippets';

export default {
  snippets,
  componentName: 'Alert',
  title: 'Alert',
  category: 'Feedback',
  props: [
    {
      name: 'afterClose',
      title: {
        label: 'afterClose',
        tip: 'Callback function triggered after closing animation',
      },
      propType: 'func',
    },
    {
      name: 'banner',
      title: { label: 'banner', tip: 'Whether to use as a top announcement' },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'closable',
      title: { label: 'closable', tip: 'The close button is not displayed by default' },
      propType: 'bool',
    },
    {
      name: 'closeText',
      title: { label: 'closeText', tip: 'Custom close button' },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'description',
      title: {
        label: 'description',
        tip: 'Auxiliary text introduction to warnings',
      },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'icon',
      title: {
        label: 'icon',
        tip: 'Custom icon, valid when `showIcon` is true',
      },
      propType: 'node',
    },
    {
      name: 'message',
      title: { label: 'message', tip: 'Warning content' },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'showIcon',
      title: { label: 'showIcon', tip: 'Whether to display auxiliary icons' },
      propType: 'bool',
    },
    {
      name: 'type',
      title: { label: 'type', tip: 'type' },
      propType: {
        type: 'oneOf',
        value: ['success', 'info', 'warning', 'error'],
      },
    },
    {
      name: 'onClose',
      title: { label: 'onClose', tip: 'Callback function triggered on shutdown' },
      propType: 'func',
    },
  ],
  configure: {
    supports: {
      style: true,
      events: [
        {
          name: 'onClose',
          template:
            "onChange(event,${extParams}){\n// Callback function triggered on close\nconsole.log('onChange');}",
        },
      ],
    },
  },
};
