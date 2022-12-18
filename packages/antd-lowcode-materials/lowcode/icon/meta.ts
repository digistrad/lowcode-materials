import snippets from './snippets';
import { AntdIconSetter } from '../_setters';

export default {
  snippets,
  componentName: 'Icon',
  title: 'Icon',
  category: 'Universal',
  props: [
    {
      name: 'className',
      title: { label: 'className', tip: 'className' },
      propType: 'string',
    },
    {
      name: 'style',
      title: {
        label: 'style',
        tip: 'Set the style of the icon, such as `fontSize` and `color`',
      },
      propType: 'object',
    },
    {
      name: 'type',
      description: 'type',
      propType: 'string',
      setter: AntdIconSetter,
    },
    {
      name: 'size',
      description: 'size',
      propType: 'number',
      defaultValue: 20,
    },
    {
      name: 'color',
      description: 'color',
      propType: 'string',
      setter: 'ColorSetter',
    },
    {
      name: 'rotate',
      title: {
        label: 'rotate',
        tip: 'Icon rotation angle',
      },
      propType: 'number',
      defaultValue: 0,
    },
    {
      name: 'spin',
      title: { label: 'spin', tip: 'Is there a rotation animation' },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'onClick',
      title: { label: 'onClick', tip: 'Callback when the button is clicked' },
      propType: 'func',
    },
  ],
  configure: { supports: { style: true } },
};
