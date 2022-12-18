import snippets from './snippets';

export default {
  snippets,
  componentName: 'Typography.Link',
  title: 'Link',
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
      name: 'href',
      title: { label: 'href', tip: 'href' },
      propType: 'string',
      defaultValue: '',
    },
    {
      name: 'target',
      title: { label: 'target', tip: 'target' },
      propType: {
        type: 'oneOf',
        value: ['_self', '_blank', '_parent', '_top'],
      },
      defaultValue: '_self',
    },
  ],
  configure: { supports: { style: true } },
};
