import snippets from './snippets';

export default {
  snippets,
  componentName: 'Comment',
  title: 'Comment',
  category: 'Data Display',
  props: [
    {
      name: 'actions',
      title: {
        label: 'actions',
        tip: 'A list of action items to render below the comment content',
      },
      propType: { type: 'arrayOf', value: 'node' },
    },
    {
      name: 'author',
      title: { label: 'author', tip: 'The element to display as the author of the note' },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'avatar',
      title: {
        label: 'avatar',
        tip: 'Element to display as comment avatar -usually antd Avatar or src',
      },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'children',
      title: {
        label: 'children',
        tip: 'Nested annotations should be provided as children of annotations',
      },
      propType: 'node',
    },
    {
      name: 'content',
      title: { label: 'content', tip: 'The main content of the comment' },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'datetime',
      title: { label: 'datetime', tip: 'Display time description' },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
  ],
  configure: { supports: { style: true } },
};
