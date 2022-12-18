import snippets from './snippets';

export default {
  snippets,
  componentName: 'Typography.Title',
  title: 'Title',
  category: 'Base',
  props: [
    {
      name: 'children',
      title: { label: 'content', tip: 'content' },
      propType: 'string',
      defaultValue: '',
      supportVariable: true,
    },
    {
      name: 'level',
      title: { label: 'importance', tip: 'Importance(1-5)' },
      propType: 'number',
      defaultValue: 1,
    },
    {
      name: 'code',
      title: { label: 'code', tip: 'Add code style' },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'copyable',
      title: { label: 'copyable', tip: 'Is it copyable' },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'delete',
      title: { label: 'delete', tip: 'Add strikethrough style' },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'disabled',
      title: { label: 'disabled', tip: 'Is it disabled' },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'editable',
      title: { label: 'editable', tip: 'Is it editable' },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'ellipsis',
      title: {
        label: 'ellipsis',
        tip: 'To set automatic overflow omission, you need to set the element width',
      },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'mark',
      title: { label: 'mark', tip: 'Add markup styles' },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'keyboard',
      title: { label: 'keyboard', tip: 'Add keyboard style' },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'underline',
      title: { label: 'underline', tip: 'add underline style' },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'strong',
      title: { label: 'strong', tip: 'Is it bold' },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'type',
      title: { label: 'type', tip: 'text type' },
      propType: { type: 'oneOf', value: ['secondary', 'warning', 'danger'] },
      setter: {
        componentName: 'SelectSetter',
        props: {
          options: [
            {
              title: 'default',
              value: 'default',
            },
            {
              title: 'secondary',
              value: 'secondary',
            },
            {
              title: 'success',
              value: 'success',
            },
            {
              title: 'warning',
              value: 'warning',
            },
            {
              title: 'danger',
              value: 'danger',
            },
          ],
        },
      },
    },
  ],
  configure: { supports: { style: true } },
};
