import snippets from './snippets';

export default {
  snippets,
  componentName: 'Card',
  title: 'Card',
  category: 'Display',
  props: [
    {
      name: 'title',
      title: { label: 'title', tip: 'title' },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    // {
    //   name: 'actions',
    //   title: { label: '卡片操作组', tip: '卡片操作组，位置在卡片底部' },
    //   propType: { type: 'arrayOf', value: 'node' },
    // },
    // {
    //   name: 'headStyle',
    //   title: { label: '标题区域样式', tip: '自定义标题区域样式' },
    //   propType: 'object',
    // },
    // {
    //   name: 'bodyStyle',
    //   title: { label: '内容区域样式', tip: '内容区域自定义样式' },
    //   propType: 'object',
    // },
    {
      name: 'bordered',
      title: { label: 'bordered', tip: 'bordered' },
      propType: 'bool',
      defaultValue: true,
    },
    {
      name: 'cover',
      title: { label: 'cover', tip: 'cover' },
      propType: 'node',
    },
    {
      name: 'extra',
      title: { label: 'extra', tip: 'The action area in the upper right corner of the card' },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'hoverable',
      title: { label: 'hoverable', tip: 'Float when the mouse is over' },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'loading',
      title: {
        label: 'loading',
        tip: 'When the card content is still loading, you can use loading to display a placeholder',
      },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'size',
      title: { label: 'size', tip: 'card size' },
      propType: { type: 'oneOf', value: ['default', 'small'] },
      defaultValue: 'default',
    },
    {
      name: 'type',
      title: { label: 'type', tip: 'type' },
      propType: { type: 'oneOf', value: ['default', 'inner'] },
      defaultValue: 'default',
    },
  ],
  configure: {
    component: { isContainer: true },
    supports: {
      style: true,
      events: [
        {
          name: 'onTabChange',
          template:
            "onTabChange(key,${extParams}){\n//Callback for tab switching\nconsole.log('onTabChange', key);}",
        },
      ],
    },
  },
};
