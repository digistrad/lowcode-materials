import snippets from './snippets';

export default {
  snippets,
  componentName: 'Avatar',
  title: 'Avatar',
  category: 'Data Display',
  props: [
    {
      name: 'icon',
      title: { label: 'icon', tip: 'Set a custom icon for your avatar' },
      propType: 'node',
    },
    {
      name: 'shape',
      title: { label: 'shape', tip: 'Specifies the shape of the avatar' },
      propType: { type: 'oneOf', value: ['circle', 'square'] },
    },
    {
      name: 'size',
      title: { label: 'size', tip: 'Set the size of the avatar' },
      propType: {
        type: 'oneOfType',
        value: ['number', { type: 'oneOf', value: ['large', 'small', 'default'] }],
      },
      defaultValue: 'default',
    },
    {
      name: 'src',
      title: { label: 'src', tip: 'The resource address of the picture type avatar' },
      propType: 'string',
    },
    {
      name: 'alt',
      title: {
        label: 'alt',
        tip: 'Alternative text when the image cannot be displayed',
      },
      propType: 'string',
    },
    {
      name: 'onError',
      title: {
        label: 'onError',
        tip: 'The event of image loading failure, returning false will disable the default fallback behavior of the component',
      },
      propType: 'func',
    },
    {
      name: 'gap',
      title: {
        label: 'gap',
        tip: 'The character type is in pixels from the left and right borders',
      },
      propType: 'number',
    },
  ],
  configure: {
    supports: {
      style: true,
      events: [
        {
          name: 'onError',
          template: "onError(${extParams}){\n//The event of image loading failure\nconsole.log('onError');}",
        },
      ],
    },
  },
};
