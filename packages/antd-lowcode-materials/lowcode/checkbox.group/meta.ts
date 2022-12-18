import { uuid } from '../_utils/utils';

export default {
  componentName: 'Checkbox.Group',
  title: 'Checkbox Group',
  category: 'Form',
  props: [
    {
      name: 'defaultValue',
      title: { label: 'defaultValue', tip: 'default selected value' },
      propType: { type: 'arrayOf', value: 'string' },
      defaultValue: [],
      setter: {
        componentName: 'ArraySetter',
        props: {
          itemSetter: {
            componentName: 'StringSetter',
          }
        }
      },
      supportVariable: true
    },
    {
      name: 'value',
      title: { label: 'value', tip: 'currently selected option' },
      propType: { type: 'arrayOf', value: 'string' },
      setter: {
        componentName: 'ArraySetter',
        props: {
          itemSetter: {
            componentName: 'StringSetter',
          }
        }
      },
      supportVariable: true
    },
    {
      name: 'disabled',
      title: { label: 'disabled', tip: 'Is it disabled' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter',
      supportVariable: true
    },
    {
      name: 'name',
      title: { label: 'name', tip: 'name' },
      propType: 'string',
      setter: 'StringSetter',
      supportVariable: true
    },
    {
      name: 'options',
      title: { label: 'options', tip: 'specify options' },
      propType: {
        type: 'arrayOf',
        value: {
          type: 'shape',
          value: [
            {
              name: 'label',
              description: 'label',
              propType: 'string',
              defaultValue: 'option name',
            },
            {
              name: 'value',
              description: 'value',
              propType: 'string',
              defaultValue: 'option value',
            },
            {
              name: 'disabled',
              description: 'disabled',
              propType: 'bool',
              defaultValue: false,
            },
          ],
        },
      },
      setter: {
        componentName: 'ArraySetter',
        props: {
          itemSetter: {
            componentName: 'ObjectSetter',
            props: {
              config: {
                items: [
                  {
                    name: 'label',
                    title: 'label',
                    setter: 'StringSetter',
                    isRequired: true
                  },
                  {
                    name: 'value',
                    title: 'value',
                    setter: 'StringSetter',
                    isRequired: true
                  },
                  {
                    name: 'disabled',
                    title: 'disabled',
                    setter: 'BoolSetter',
                  },
                ],
              },
            },
            initialValue: () => {
              return {
                label: 'option name',
                value: uuid(),
                disabled: false,
              };
            },
          },
        },
      },
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
            "onChange(checkedValue,${extParams}){\n//Callback function when changing\nconsole.log('onChange', checkedValue);}",
        },
      ],
    },
  },
};
