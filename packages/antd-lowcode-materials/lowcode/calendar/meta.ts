import snippets from './snippets';

export default {
  snippets,
  componentName: 'Calendar',
  title: 'Calendar',
  category: 'Display',
  props: [
    {
      name: 'defaultValue',
      title: { label: 'defaultValue', tip: 'The date shown by default' },
      propType: 'date',
      setter: 'DateSetter',
    },
    // {
    //   name: 'dateCellRender',
    //   title: {
    //     label: '自定义日期追加渲染',
    //     tip: '自定义渲染日期单元格，返回内容会被追加到单元格',
    //   },
    //   propType: 'func',
    // },
    // {
    //   name: 'dateFullCellRender',
    //   title: {
    //     label: '自定义渲染日期单元格，返回内容覆盖单元格',
    //     tip: '自定义渲染日期单元格，返回内容覆盖单元格',
    //   },
    //   propType: 'func',
    // },
    {
      name: 'disabledDate',
      title: { label: 'disabledDate', tip: 'unselectable date' },
      propType: 'func',
    },
    {
      name: 'fullscreen',
      title: { label: 'fullscreen', tip: 'Whether to display in full screen' },
      propType: 'bool',
      defaultValue: true,
    },
    // {
    //   name: 'locale',
    //   title: { label: '国际化配置', tip: '国际化配置' },
    //   propType: 'object',
    // },
    {
      name: 'mode',
      title: { label: 'mode', tip: 'mode' },
      propType: { type: 'oneOf', value: ['month', 'year'] },
      defaultValue: 'month',
    },
    // {
    //   name: 'monthCellRender',
    //   title: {
    //     label: '自定义渲染月单元格，返回内容会被追加到单元格',
    //     tip: '自定义渲染月单元格，返回内容会被追加到单元格',
    //   },
    //   propType: 'func',
    // },
    // {
    //   name: 'monthFullCellRender',
    //   title: {
    //     label: '自定义渲染月单元格，返回内容覆盖单元格',
    //     tip: '自定义渲染月单元格，返回内容覆盖单元格',
    //   },
    //   propType: 'func',
    // },
    // {
    //   name: 'validRange',
    //   title: { label: '设置可以显示的日期', tip: '设置可以显示的日期' },
    //   propType: { type: 'arrayOf', value: 'object' },
    // },
    // {
    //   name: 'value',
    //   title: { label: '当前值', tip: '展示日期' },
    //   propType: 'object',
    // },
    {
      name: 'onPanelChange',
      title: { label: 'onPanelChange', tip: 'onPanelChange' },
      propType: 'func',
    },
    {
      name: 'onSelect',
      title: { label: 'onSelect', tip: 'onSelect' },
      propType: 'func',
    },
    {
      name: 'onChange',
      title: { label: 'onChange', tip: 'onChange' },
      propType: 'func',
    },
    // {
    //   name: 'headerRender',
    //   title: { label: '自定义头部内容', tip: '自定义头部内容' },
    //   propType: 'func',
    // },
  ],
  configure: {
    supports: {
      style: true,
      events: [
        {
          name: 'onPanelChange',
          template:
            "onPanelChange(date,mode,${extParams}){\n//Date panel change callback\nconsole.log('onPanelChange', date, mode);}",
        },
        {
          name: 'onSelect',
          template:
            "onSelect(date,${extParams}){\n//Click to select date callback\nconsole.log('onSelect', date);}",
        },
        {
          name: 'onChange',
          template:
            "onChange(date,${extParams}){\n//Date change callback\nconsole.log('onChange', date);}",
        },
      ],
    },
  },
};
