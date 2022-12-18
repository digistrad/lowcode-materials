export default {
  componentName: 'Descriptions.Item',
  title: 'Descriptions.Item',
  props: [
    {
      name: 'key',
      title: {
        label: 'key',
        tip: 'key',
      },
      propType: 'string',
    },
    {
      name: 'tab',
      title: {
        label: 'Title',
        tip: 'Title',
      },
      propType: 'string',
    },
  ],
  configure: {
    component: { isContainer: true },
    supports: { style: true },
  },
};
