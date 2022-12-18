import snippets from './snippets';

export default {
  snippets,
  componentName: 'Cascader',
  title: 'Cascader',
  category: 'Form',
  props: [
    {
      name: 'defaultValue',
      title: { label: 'defaultValue', tip: 'defaultValue' },
      propType: {
        type: 'arrayOf',
        value: { type: 'oneOfType', value: ['string', 'number'] },
      },
    },
    {
      name: 'value',
      title: { label: 'value', tip: 'value' },
      propType: {
        type: 'arrayOf',
        value: { type: 'oneOfType', value: ['string', 'number'] },
      },
    },
    {
      name: 'options',
      title: { label: 'options', tip: 'options' },
      setter: 'JsonSetter',
    },
    {
      name: 'allowClear',
      title: { label: 'allowClear', tip: 'allowClear' },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter'
    },
    {
      name: 'autoFocus',
      title: { label: 'autoFocus', tip: 'autoFocus' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    },
    {
      name: 'bordered',
      title: { label: 'bordered', tip: 'bordered' },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter'
    },
    {
      name: 'changeOnSelect',
      title: {
        label: 'changeOnSelect',
        tip: 'Clicking the value of each menu option will trigger on change',
      },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    },
    {
      name: 'className',
      title: { label: 'className', tip: 'className' },
      propType: 'string',
      setter: 'StringSetter'
    },
    {
      name: 'disabled',
      title: { label: 'disabled', tip: 'disabled' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    },
    {
      name: 'expandTrigger',
      title: { label: 'expandTrigger', tip: 'How to trigger the expansion of the secondary menu' },
      propType: { type: 'oneOf', value: ['click', 'hover'] },
    },
    {
      name: 'notFoundContent',
      title: { label: 'notFoundContent', tip: 'notFoundContent' },
      propType: 'string',
      setter: 'StringSetter'
    },
    {
      name: 'placeholder',
      title: { label: 'placeholder', tip: 'placeholder' },
      propType: 'string',
      setter: 'StringSetter'
    },
    {
      name: 'placement',
      title: { label: 'placement', tip: 'placement' },
      propType: {
        type: 'oneOf',
        value: ['bottomLeft', 'bottomRight', 'topLeft', 'topRight'],
      },
    },
    {
      name: 'showSearch',
      title: { label: 'showSearch', tip: 'Show search box in select box' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    },
    {
      name: 'size',
      title: { label: 'size', tip: 'input box size' },
      propType: { type: 'oneOf', value: ['large', 'middle', 'small'] },
      setter: {
        componentName: 'SelectSetter',
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
      defaultValue: 'middle',
    },
    {
      name: 'style',
      title: { label: 'style', tip: 'style' },
      propType: 'object',
    },
    {
      name: 'onChange',
      title: { label: 'onChange', tip: 'onChange' },
      propType: 'func',
    },
    {
      name: 'onPopupVisibleChange',
      title: { label: 'onPopupVisibleChange', tip: 'onPopupVisibleChange' },
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
            "onChange(value,selectedOptions,${extParams}){\n//Callback after selection is completed\nconsole.log('onChange', value, selectedOptions);}",
        },
        {
          name: 'onPopupVisibleChange',
          template:
            "onPopupVisibleChange(value,selectedOptions,${extParams}){\n//Callback for showing/hiding floating layer\nconsole.log('onPopupVisibleChange', value, selectedOptions);}",
        },
      ],
    },
  },
};
