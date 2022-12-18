import snippets from './snippets';

export default {
  snippets,
  componentName: 'DatePicker.RangePicker',
  title: 'Date Range Picker',
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
          propType: 'object',
          setter: 'JsonSetter',
        },
        {
          name: 'value',
          title: {
            label: 'value',
            tip: 'value',
          },
          propType: 'object',
          setter: 'JsonSetter',
        },
        {
          name: 'defaultPickerValue',
          title: {
            label: 'defaultPickerValue',
            tip: 'defaultPickerValue',
          },
          propType: 'object',
          setter: 'JsonSetter',
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
            tip: 'Input box size, large height is 40px, small is 24px, the default is 32px',
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
            tip: 'Set the picker type',
          },
          propType: {
            type: 'oneOf',
            value: ['date', 'week', 'month', 'quarter', 'year'],
          },
          defaultValue: 'date',
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
        },
        {
          name: 'mode',
          title: {
            label: 'mode',
            tip: 'State of the date panel',
          },
          propType: {
            type: 'oneOf',
            value: ['time', 'date', 'month', 'year', 'decade'],
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
                  title: 'year',
                  value: 'year',
                },
                {
                  title: 'decade',
                  value: 'decade',
                },
              ],
            },
          },
        },
        {
          name: 'format',
          title: {
            label: 'format',
            tip: 'Displayed date format, configuration reference moment.js',
          },
          propType: 'string',
          setter: 'StringSetter',
        },
        {
          name: 'placeholder',
          title: {
            label: 'placeholder',
            tip: 'Input box prompt text',
          },
          propType: 'string',
          setter: 'StringSetter',
        },
        {
          name: 'allowClear',
          title: {
            label: 'allowClear',
            tip: 'Is it allowed to clear',
          },
          propType: 'bool',
          defaultValue: true,
          setter: 'BoolSetter',
        },
        {
          name: 'bordered',
          title: {
            label: 'bordered',
            tip: 'Is there a border',
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
        // {
        //   name: 'open',
        //   title: {
        //     label: '弹层是否展开',
        //     tip: 'open | 控制弹层是否展开',
        //   },
        //   propType: 'bool',
        //   setter: 'BoolSetter',
        // },
        {
          name: 'showTime',
          title: {
            label: 'showTime',
            tip: 'showTime',
          },
          propType: 'bool',
          defaultValue: false,
          setter: 'BoolSetter',
        },
        {
          name: 'inputReadOnly',
          title: {
            label: 'inputReadOnly',
            tip: 'Set the input field as read-only (to avoid opening the virtual keyboard on mobile devices)',
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
          name: 'ranges',
          title: {
            label: 'ranges',
            tip: 'Quick selection of preset time ranges',
          },
          propType: 'object',
          setter: 'JsonSetter',
        },
        {
          name: 'disabledDate',
          title: {
            label: 'disabledDate',
            tip: 'disabledDate',
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
    //   name: 'renderExtraFooter',
    //   title: { label: '在面板中添加额外的页脚', tip: '在面板中添加额外的页脚' },
    //   propType: 'func',
    // },
    // {
    //   name: 'className',
    //   title: { label: '选择器 className', tip: '选择器 className' },
    //   propType: 'string',
    // },
    // {
    //   name: 'dropdownClassName',
    //   title: {
    //     label: '额外的弹出日历 className',
    //     tip: '额外的弹出日历 className',
    //   },
    //   propType: 'string',
    // },
    // {
    //   name: 'getPopupContainer',
    //   title: {
    //     label: '定义浮层的容器，默认为 body 上新建 div',
    //     tip: '定义浮层的容器，默认为 body 上新建 div',
    //   },
    //   propType: 'func',
    // },
    // {
    //   name: 'locale',
    //   title: { label: '国际化配置', tip: '国际化配置' },
    //   propType: 'object',
    // },
    // {
    //   name: 'popupStyle',
    //   title: { label: '额外的弹出日历样式', tip: '额外的弹出日历样式' },
    //   propType: 'CSSProperties',
    //   defaultValue: '{}',
    // },
    // {
    //   name: 'style',
    //   title: { label: '自定义输入框样式', tip: '自定义输入框样式' },
    //   propType: 'CSSProperties',
    //   defaultValue: '{}',
    // },
  ],
  configure: {
    supports: {
      style: true,
      events: [
        {
          name: 'onChange',
          template:
            "onChange(dates,dateStrings,${extParams}){\n//Callback for date range changes\nconsole.log('onChange',dates,dateStrings);}",
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
