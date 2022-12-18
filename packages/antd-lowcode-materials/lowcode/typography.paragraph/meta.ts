import snippets from './snippets';

export default {
  snippets,
  componentName: 'Typography.Paragraph',
  title: 'Paragraph',
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
      name: 'code',
      title: { label: 'code', tip: 'Add code style' },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'copyable',
      title: {
        label: 'copyable',
        tip: 'Whether it can be copied, and various customizations can be performed when it is an object',
      },
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
      title: { label: 'ellipsis', tip: 'automatic overflow omission' },
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
      name: 'underline',
      title: { label: 'underline', tip: 'add underline style' },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'onChange',
      title: {
        label: 'onChange',
        tip: 'Fired when a user submits an edit',
      },
      propType: 'func',
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
      propType: {
        type: 'oneOf',
        value: ['default', 'secondary', 'success', 'warning', 'danger'],
      },
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
  configure: { supports: { style: true, events: ['onChange'] } },
};
