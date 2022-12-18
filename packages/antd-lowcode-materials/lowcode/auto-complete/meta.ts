import { uuid } from '../_utils/utils';

import snippets from './snippets';

export default {
  snippets,
  componentName: 'AutoComplete',
  title: 'AutoComplete',
  category: 'Form',
  props: [
    {
      name: 'defaultValue',
      title: { label: 'defaultValue', tip: 'defaultValue' },
      propType: 'string',
    },
    {
      name: 'value',
      title: { label: 'value', tip: 'value' },
      propType: 'string',
    },
    {
      name: 'allowClear',
      title: { label: 'allowClear', tip: 'allowClear' },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'options',
      title: { label: 'options', tip: 'options' },
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
                  },
                  {
                    name: 'value',
                    title: 'value',
                    setter: 'StringSetter',
                  },
                ],
              },
            },
            initialValue: () => {
              return {
                label: 'Option Name',
                value: uuid(),
              };
            },
          },
        },
      },
    },
    {
      name: 'autoFocus',
      title: { label: 'autoFocus', tip: 'autoFocus' },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'backfill',
      title: {
        label: 'backfill',
        tip: 'Backfill the selected item into the input box when using the keyboard to select an option',
      },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'defaultActiveFirstOption',
      title: { label: 'defaultActiveFirstOption', tip: 'Whether to highlight the first option by default' },
      propType: 'bool',
      defaultValue: true,
    },
    {
      name: 'disabled',
      title: { label: 'disabled', tip: 'Is it disabled' },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'filterOption',
      title: { label: 'filterOption', tip: 'Whether to filter by input' },
      propType: 'bool',
    },
    {
      name: 'placeholder',
      title: { label: 'placeholder', tip: 'placeholder' },
      propType: 'string',
    },
    {
      name: 'onBlur',
      title: { label: 'onBlur', tip: 'Callback when focus is lost' },
      propType: 'func',
    },
    {
      name: 'onChange',
      title: {
        label: 'onChange',
        tip: 'This function is called when the option is selected or the value of the input changes',
      },
      propType: 'func',
    },
    {
      name: 'onFocus',
      title: { label: 'onFocus', tip: 'Callback when focus is gained' },
      propType: 'func',
    },
    {
      name: 'onSearch',
      title: { label: 'onSearch', tip: 'Called when searching for completions' },
      propType: 'func',
    },
    {
      name: 'onSelect',
      title: {
        label: 'onSelect',
        tip: 'Called when selected, the parameter is the value of the selected item',
      },
      propType: 'func',
    },
    {
      name: 'defaultOpen',
      title: { label: 'defaultOpen', tip: 'Whether to expand the drop-down menu by default' },
      propType: 'bool',
    },
    // {
    //   name: 'open',
    //   title: { label: '展开下拉菜单', tip: '是否展开下拉菜单' },
    //   propType: 'bool',
    // },
    {
      name: 'onDropdownVisibleChange',
      title: { label: 'onDropdownVisibleChange', tip: 'Callback for expanding the dropdown menu' },
      propType: 'func',
    },
    {
      name: 'notFoundContent',
      title: { label: 'notFoundContent', tip: 'What to display when the dropdown is empty' },
      propType: 'string',
    },
  ],
  configure: {
    props: [
      {
        name: 'defaultValue',
        title: {
          label: {
            type: 'i18n',
            en_US: 'Default Value',
          },
          tip: {
            type: 'i18n',
            en_US: 'prop: defaultValue | description: defaultValue',
          },
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'value',
        title: {
          label: {
            type: 'i18n',
            en_US: 'Value',
          },
          tip: {
            type: 'i18n',
            en_US: 'prop: Value | description: Value',
          },
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'allowClear',
        title: {
          label: {
            type: 'i18n',
            en_US: 'Allow Clear',
          },
          tip: {
            type: 'i18n',
            en_US: 'prop: allowClear | description: Allow Clear',
          }
        },
        setter: 'BoolSetter',
        supportVariable: true,
      },
      {
        name: 'options',
        title: {
          label: {
            type: 'i18n',
            en_US: 'Options',
          },
          tip: {
            type: 'i18n',
            en_US: 'prop: options | description: Options',
          }
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
                      title: 'Label',
                      setter: 'StringSetter',
                      isRequired: true
                    },
                    {
                      name: 'value',
                      title: 'Value',
                      setter: 'StringSetter',
                      isRequired: true
                    },
                  ],
                },
              },
              initialValue: () => {
                return {
                  label: 'Option Name',
                  value: uuid(),
                };
              },
            },
          },
        },
      },
      {
        name: 'autoFocus',
        title: {
          label: {
            type: 'i18n',
            en_US: 'Auto Focus',
          },
          tip: {
            type: 'i18n',
            en_US: 'prop: autoFocus | description: Auto Focus',
          }
        },
        setter: 'BoolSetter',
        supportVariable: true,
      },
      {
        name: 'backfill',
        title: {
          label: {
            type: 'i18n',
            en_US: 'Backfill',
          },
          tip: {
            type: 'i18n',
            en_US: 'prop: backfill | description: When using the keyboard to select options, backfill the selected items into the input box',
          }
        },
        setter: 'BoolSetter',
        supportVariable: true,
      },
      {
        name: 'defaultActiveFirstOption',
        title: {
          label: {
            type: 'i18n',
            en_US: 'Default Active First Option',
          },
          tip: {
            type: 'i18n',
            en_US: 'prop: defaultActiveFirstOption | description: Whether to highlight the first option by default',
          }
        },
        setter: 'BoolSetter',
        defaultValue: true,
        supportVariable: true,
      },
      {
        name: 'disabled',
        title: {
          label: {
            type: 'i18n',
            en_US: 'Disabled',
          },
          tip: {
            type: 'i18n',
            en_US: 'prop: disabled | description: Disable',
          }
        },
        setter: 'BoolSetter',
        supportVariable: true,
      },
      {
        name: 'filterOption',
        title: {
          label: {
            type: 'i18n',
            en_US: 'Filter Option',
          },
          tip: {
            type: 'i18n',
            en_US: 'prop: filterOption | description: Filter based on input',
          }
        },
        setter: 'BoolSetter',
        supportVariable: true,
      },
      {
        name: 'placeholder',
        title: {
          label: {
            type: 'i18n',
            en_US: 'Placeholder',
          },
          tip: {
            type: 'i18n',
            en_US: 'prop: placeholder | description: Placeholder',
          },
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'defaultOpen',
        propType: 'bool',
        title: {
          label: {
            type: 'i18n',
            en_US: 'Default Open',
          },
          tip: {
            type: 'i18n',
            en_US: 'prop: defaultOpen | description: Expand drop-down menu by default',
          }
        },
        setter: 'BoolSetter',
        supportVariable: true,
      },
      // {
      //   name: 'open',
      //   title: {
      //     label: {
      //       type: 'i18n',
      //       zh_CN: '展开下拉菜单',
      //       en_US: 'Open',
      //     },
      //     tip: {
      //       type: 'i18n',
      //       zh_CN: '属性: open | 说明：是否展开下拉菜单',
      //       en_US: 'prop: open | description: Expand drop-down menu',
      //     }
      //   },
      //   setter: 'BoolSetter',
      //   supportVariable: true,
      // },
      {
        name: 'notFoundContent',
        title: {
          label: {
            type: 'i18n',
            en_US: 'Not Found Content',
          },
          tip: {
            type: 'i18n',
            en_US: 'prop: notFoundContent | description: Content displayed when the drop-down list is empty',
          },
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
    ],
    supports: {
      style: true,
      events: [
        {
          name: 'onBlur',
          template: "onBlur(${extParams}){\n// Callback when focus is lost\nconsole.log('onBlur');}",
        },
        {
          name: 'onChange',
          template:
            "onChange(value,${extParams}){\n//When the option is selected, or the value of the input changes, call this function\nconsole.log('onChange', value);}",
        },
        {
          name: 'onFocus',
          template:
            "onFocus(${extParams}){\n//When the option is selected, or the value of the input changes, call this function\nconsole.log('onFocus')}",
        },
        {
          name: 'onSearch',
          template:
            "onSearch(value,${extParams}){\n//Call\nconsole.log('onSearch',value) when searching for completion items;}",
        },
        {
          name: 'onSelect',
          template:
            "onSelect(value,option,${extParams}){\n//Call when selected\nconsole.log('onSelect', value, option);}",
        },
        {
          name: 'onDropdownVisibleChange',
          template:
            "onDropdownVisibleChange(open,${extParams}){\n//Callback to expand the drop-down menu\nconsole.log('onDropdownVisibleChange', open);}",
        },
      ],
    },
  },
};
