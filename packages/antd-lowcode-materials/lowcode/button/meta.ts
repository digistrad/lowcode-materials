import snippets from './snippets';

export default {
  componentName: 'Button',
  title: 'Button',
  category: 'Universal',
  props: [
    {
      title: 'Function',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'children',
          title: {
            label: 'content',
            tip: 'children',
          },
          propType: {
            type: 'oneOfType',
            value: ['node', 'string'],
          },
          setter: ['SlotSetter', 'StringSetter', 'VariableSetter'],
        },
        {
          name: 'htmlType',
          title: {
            label: 'htmlType',
            tip: 'htmlType',
          },
          propType: {
            type: 'oneOf',
            value: ['submit', 'reset', 'button'],
          },
          setter: [
            {
              componentName: 'RadioGroupSetter',
              props: {
                options: [
                  {
                    title: 'Submit',
                    value: 'submit',
                  },
                  {
                    title: 'Reset',
                    value: 'reset',
                  },
                  {
                    title: 'Button',
                    value: 'button',
                  },
                ],
              },
            },
            'VariableSetter',
          ],
          defaultValue: 'button',
        },
        {
          name: 'href',
          title: {
            label: 'href',
            tip: 'href',
          },
          propType: 'string',
          setter: ['StringSetter', 'VariableSetter'],
        },
        {
          name: 'target',
          title: {
            label: 'Target',
            tip: 'target',
          },
          propType: {
            type: 'oneOf',
            value: ['_self', '_blank', '_parent', '_top'],
          },
          setter: [
            {
              componentName: 'SelectSetter',
              props: {
                options: [
                  {
                    title: '_self',
                    value: '_self',
                  },
                  {
                    title: '_blank',
                    value: '_blank',
                  },
                  {
                    title: '_parent',
                    value: '_parent',
                  },
                  {
                    title: '_top',
                    value: '_top',
                  },
                ],
              },
            },
            'StringSetter',
            'VariableSetter',
          ],
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("href")?.trim()',
          },
        },
      ],
    },
    {
      title: 'Exterior',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'type',
          title: { label: 'type', tip: 'type' },
          propType: {
            type: 'oneOf',
            value: ['primary', 'ghost', 'dashed', 'danger', 'link', 'text'],
          },
          setter: [
            {
              componentName: 'SelectSetter',
              props: {
                options: [
                  {
                    title: 'primary',
                    value: 'primary',
                  },
                  {
                    title: 'dashed',
                    value: 'dashed',
                  },
                  {
                    title: 'danger',
                    value: 'danger',
                  },
                  {
                    title: 'link',
                    value: 'link',
                  },
                  {
                    title: 'text',
                    value: 'text',
                  },
                ],
              },
            },
            'VariableSetter',
          ],
        },
        {
          name: 'size',
          title: { label: 'size', tip: 'size' },
          propType: { type: 'oneOf', value: ['large', 'middle', 'small'] },
          setter: [
            {
              componentName: 'RadioGroupSetter',
              props: {
                options: [
                  {
                    title: 'large',
                    value: 'large',
                  },
                  {
                    title: 'middle',
                    value: 'middle',
                  },
                  {
                    title: 'small',
                    value: 'small',
                  },
                ],
              },
            },
            'VariableSetter',
          ],
          defaultValue: 'middle',
        },
        {
          name: 'shape',
          title: {
            label: 'shape',
            tip: 'shape',
          },
          propType: { type: 'oneOf', value: ['default', 'circle', 'round'] },
          defaultValue: 'default',
          setter: [
            {
              componentName: 'RadioGroupSetter',
              props: {
                options: [
                  {
                    title: 'default',
                    value: 'default',
                  },
                  {
                    title: 'circle',
                    value: 'circle',
                  },
                  {
                    title: 'round',
                    value: 'round',
                  },
                ],
              },
            },
            'VariableSetter',
          ],
        },
        {
          name: 'icon',
          title: { label: 'icon', tip: 'icon' },
          propType: 'node',
          setter: {
            componentName: 'SlotSetter',
            initialValue: {
              type: 'JSSlot',
              value: [
                {
                  componentName: 'Icon',
                  props: {
                    type: 'SmileOutlined',
                    size: 20,
                    rotate: 0,
                    spin: false,
                  },
                },
              ],
            },
          },
        },
        {
          name: 'block',
          title: {
            label: 'block',
            tip: 'block',
          },
          propType: 'bool',
          setter: 'BoolSetter',
          defaultValue: false,
        },
        {
          name: 'danger',
          title: { label: 'danger', tip: 'danger' },
          propType: 'bool',
          setter: 'BoolSetter',
          defaultValue: false,
        },
        {
          name: 'ghost',
          title: { label: 'ghost', tip: 'ghost' },
          propType: 'bool',
          setter: 'BoolSetter',
          defaultValue: false,
        },
      ],
    },
    {
      title: 'State',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'loading',
          title: { label: 'loading', tip: 'loading' },
          propType: 'bool',
          setter: ['BoolSetter', 'VariableSetter'],
        },
        {
          name: 'disabled',
          title: { label: 'disabled', tip: 'disabled' },
          propType: 'bool',
          setter: ['BoolSetter', 'VariableSetter'],
          defaultValue: false,
        },
      ],
    },
    {
      name: 'onClick',
      title: { label: 'onClick', tip: 'onClick' },
      propType: 'func',
    },
  ],
  configure: {
    supports: {
      events: [
        {
          name: 'onClick',
          template:
            "onClick(event,${extParams}){\n//Callback when the button is clicked\nconsole.log('onClick', event);}",
        },
      ],
      style: true,
    },
  },
  snippets,
};
