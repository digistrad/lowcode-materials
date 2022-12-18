export default [
  {
    title: 'Divider',
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/divider-1.png',
    schema: {
      componentName: 'Divider',
      props: {},
    },
  },
  {
    title: 'Divider with Text',
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/divider-2.png',
    schema: {
      componentName: 'Divider',
      props: {
        children: [
          {
            componentName: 'Typography.Text',
            props: {
              children: '分割文字',
            },
          },
        ],
      },
    },
  },
];
