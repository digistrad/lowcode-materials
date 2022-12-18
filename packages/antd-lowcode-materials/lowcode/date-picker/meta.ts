import snippets from './snippets';

export default {
  snippets,
  componentName: 'DatePicker',
  title: 'DatePicker',
  category: 'Form',
  props: [
    {
      title: 'Value',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'defaultValue',
          title: {
            label: 'defaultValue',
            tip: 'defaultValue',
          },
          propType: 'date',
          setter: 'DateSetter',
        },
        {
          name: 'value',
          title: {
            label: 'value',
            tip: 'value',
          },
          propType: 'date',
          setter: 'DateSetter',
        },
      ],
    },
    {
      title: 'Function',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'size',
          title: {
            label: 'size',
            tip: 'size',
          },
          propType: {
            type: 'oneOf',
            value: ['large', 'middle', 'small'],
          },
          setter: {
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
          defaultValue: 'middle',
        },
        {
          name: 'picker',
          title: {
            label: 'picker',
            tip: 'picker',
          },
          setter: {
            componentName: 'SelectSetter',
            props: {
              options: [
                {
                  title: 'date',
                  value: 'date',
                },
                {
                  title: 'week',
                  value: 'week',
                },
                {
                  title: 'month',
                  value: 'month',
                },
                {
                  title: 'quarter',
                  value: 'quarter',
                },
                {
                  title: 'year',
                  value: 'year',
                },
              ],
            },
          },
          propType: {
            type: 'oneOf',
            value: ['date', 'week', 'month', 'quarter', 'year'],
          },
        },
        {
          name: 'format',
          title: {
            label: 'format',
            tip: 'format',
          },
          propType: 'string',
          defaultValue: 'YYYY-MM-DD',
          setter: 'StringSetter',
        },
        {
          name: 'placeholder',
          title: {
            label: 'placeholder',
            tip: 'placeholder',
          },
          propType: 'string',
          setter: 'StringSetter',
        },
        {
          name: 'allowClear',
          title: {
            label: 'allowClear',
            tip: 'allowClear',
          },
          propType: 'bool',
          defaultValue: true,
          setter: 'BoolSetter',
        },
        {
          name: 'bordered',
          title: {
            label: 'bordered',
            tip: 'bordered',
          },
          propType: 'bool',
          defaultValue: true,
          setter: 'BoolSetter',
        },
        {
          name: 'showToday',
          title: {
            label: 'showToday',
            tip: 'whether to show today button',
          },
          propType: 'bool',
          defaultValue: true,
          setter: 'BoolSetter',
        },
        {
          name: 'autoFocus',
          title: {
            label: 'autoFocus',
            tip: 'autoFocus',
          },
          propType: 'bool',
          defaultValue: false,
          setter: 'BoolSetter',
        },
        {
          name: 'disabled',
          title: {
            label: 'disabled',
            tip: 'disabled',
          },
          propType: 'bool',
          defaultValue: false,
          setter: 'BoolSetter',
        },
        {
          name: 'inputReadOnly',
          title: {
            label: 'inputReadOnly',
            tip: 'Avoid opening virtual keyboards on mobile devices',
          },
          propType: 'bool',
          defaultValue: false,
          setter: 'BoolSetter',
        },
        {
          name: 'showTime',
          title: {
            label: 'showTime',
            tip: 'Can I choose time',
          },
          propType: 'bool',
          defaultValue: false,
          setter: 'BoolSetter',
        },
      ],
    },
    {
      title: 'Advanced',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'disabledDate',
          title: {
            label: 'disabledDate',
            tip: 'unselectable date',
          },
          propType: 'func',
          setter: [
            {
              componentName: 'FunctionSetter',
              props: {
                template:
                  'disabledDate(currentDate,${extParams}){\n//Set unselectable date\nreturn true\n}',
              },
            },
            'VariableSetter',
          ],
        },
      ],
    },
    // {
    //   name: 'dropdownClassName',
    //   title: {
    //     label: '额外的弹出日历 className',
    //     tip: '额外的弹出日历 className',
    //   },
    //   setter: 'ClassNameSetter',
    // },
    // {
    //   name: 'popupStyle',
    //   title: { label: '额外的弹出日历样式', tip: '额外的弹出日历样式' },
    //   setter: 'JsonSetter',
    // },
    // {
    //   name: 'suffixIcon',
    //   title: { label: '自定义的选择框后缀图标', tip: '自定义的选择框后缀图标' },
    //   setter: 'IconSetter',
    // },
    // {
    //   name: 'style',
    //   title: { label: '自定义输入框样式', tip: '自定义输入框样式' },
    //   setter: 'JsonSetter',
    // },
  ],
  configure: {
    supports: {
      style: true,
      events: [
        {
          name: 'onChange',
          template:
            "onChange(date,dateString,${extParams}){\n//Callback when time changes\nconsole.log('onChange',date,dateString);}",
        },
        {
          name: 'onOpenChange',
          template:
            "onOpenChange(open,${extParams}){\n//Callback for popping up and closing the calendar\nconsole.log('onOpenChange',open);}",
        },
        {
          name: 'onPanelChange',
          template:
            "onPanelChange(value,mode,${extParams}){\n//Calendar panel switching callback\nconsole.log('onPanelChange',value,mode);}",
        },
      ],
    },
  },
};
