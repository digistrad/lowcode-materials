import snippets from './snippets';

export default {
  snippets,
  componentName: 'Typography.Text',
  title: 'Text',
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
      title: { label: 'code', tip: 'code' },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'delete',
      title: { label: 'delete', tip: 'delete' },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'disabled',
      title: { label: 'disabled', tip: 'disabled' },
      propType: 'bool',
      defaultValue: false,
    },

    {
      name: 'mark',
      title: { label: 'mark', tip: 'mark' },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'keyboard',
      title: { label: 'keyboard', tip: 'keyboard' },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'underline',
      title: { label: 'underline', tip: 'underline' },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'strong',
      title: { label: 'strong', tip: 'strong' },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'type',
      title: { label: 'type', tip: 'type' },
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
    {
      title: 'Advanced',
      type: 'group',
      display: 'accordion',
      items: [
        {
          name: 'copyable',
          title: { label: 'copyable', tip: 'copyable' },
          propType: { type: 'oneOfType', value: ['bool', 'object'] },
          setter: [
            {
              componentName: 'BoolSetter',
              isRequired: false,
              initialValue: false,
            },
            {
              componentName: 'JsonSetter',
              isRequired: false,
            },
          ],
        },
        {
          name: 'editable',
          title: { label: 'editable', tip: 'editable' },
          propType: { type: 'oneOfType', value: ['bool', 'object'] },
          setter: [
            {
              componentName: 'BoolSetter',
              isRequired: false,
              initialValue: false,
            },
            {
              componentName: 'JsonSetter',
              isRequired: false,
            },
          ],
        },
        {
          name: 'ellipsis',
          title: {
            label: 'ellipsis',
            tip: 'To set automatic overflow omission, you need to set the element width',
          },
          propType: { type: 'oneOfType', value: ['bool', 'object'] },
          setter: [
            {
              componentName: 'BoolSetter',
              isRequired: false,
              initialValue: false,
            },
            {
              componentName: 'JsonSetter',
              isRequired: false,
            },
          ],
        },
      ],
    },
  ],
  configure: {
    supports: {
      style: true,
      events: [
        {
          name: 'copyable.onCopy',
          template: "onCopy(${extParams}){\n//Copy successful callback function\nconsole.log('onCopy');}",
        },
        {
          name: 'editable.onStart',
          template: "onStart(${extParams}){\n//Triggered when entering the editing state\nconsole.log('onStart');}",
        },
        {
          name: 'editable.onChange',
          template:
            "onChange(event,${extParams}){\n//Triggered when the text field is edited\nconsole.log('onChange', event);}",
        },
        {
          name: 'editable.onEnd',
          template: "onEnd(${extParams}){\n//Triggered when pressing ENTER to end the editing state\nconsole.log('onEnd');}",
        },
        {
          name: 'editable.onCancel',
          template:
            "onCancel(${extParams}){\n//Triggered when pressing ESC to exit the editing state\nconsole.log('onCancel');}",
        },
        {
          name: 'ellipsis.onEllipsis',
          template:
            "onEllipsis(ellipsis,${extParams}){\n//Trigger callback when ellipsis\nconsole.log('onEllipsis', ellipsis);}",
        },
        {
          name: 'ellipsis.onExpand',
          template:
            "onExpand(event,${extParams}){\n//Callback when clicked to expand\nconsole.log('onExpand', event);}",
        },
      ],
    },
  },
};
