export default [
  {
    title: 'Affix',
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/affix-1.jpg',
    schema: {
      componentName: 'Affix',
      props: {
        offsetTop: 100,
      },
      children: [
        {
          componentName: 'Button',
          props: {
            children: 'Affix Top',
          },
        },
      ],
    },
  },
];
