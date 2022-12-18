import snippets from './snippets';

export default {
  snippets,
  componentName: 'Checkbox',
  title: 'Checkbox',
  category: 'Form',
  props: [
    {
      name: 'children',
      title: { label: 'content', tip: 'content' },
      propType: 'string',
      setter: 'StringSetter',
      supportVariable: true
    },
    {
      name: 'autoFocus',
      title: { label: 'autoFocus', tip: 'autoFocus' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter',
      supportVariable: true
    },
    {
      name: 'checked',
      title: { label: 'checked', tip: 'Specifies whether the currently selected' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter',
      supportVariable: true
    },
    {
      name: 'defaultChecked',
      title: { label: 'defaultChecked', tip: 'defaultChecked' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter',
      supportVariable: true
    },
    {
      name: 'disabled',
      title: { label: 'disabled', tip: 'disabled' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter',
      supportVariable: true
    },
    {
      name: 'indeterminate',
      title: { label: 'indeterminate', tip: 'Indeterminate state' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter',
      supportVariable: true
    },
    {
      name: 'onChange',
      title: { label: 'onChange', tip: 'Callback function on change' },
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
            "onChange(event,${extParams}){\n//Callback function when changing\nconsole.log('onChange', event);}",
        },
      ],
    },
  },
};
