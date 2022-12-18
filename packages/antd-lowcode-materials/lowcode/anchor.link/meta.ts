import snippets from './snippets';

export default {
  snippets,
  componentName: 'Anchor.Link',
  title: 'Anchor.Link',
  category: 'Other',
  props: [
    {
      name: 'href',
      title: { label: 'Anchor.Link', tip: 'Anchor.Link' },
      propType: 'string',
    },
    {
      name: 'target',
      title: {
        label: 'target',
        tip: 'This property specifies where to display the linked resource',
      },
      propType: 'string',
    },
    {
      name: 'title',
      title: { label: 'Title', tip: 'Title' },
      propType: 'string',
    },
  ],
  configure: { supports: { style: true } },
};
