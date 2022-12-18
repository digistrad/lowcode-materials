export default [
  {
    title: 'Side Drawer',
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/drawer-1.png',
    schema: {
      componentName: 'Drawer',
      props: {
        title: 'Basic Drawer',
        visible: true,
        placement: 'right',
        destroyOnClose: true,
      },
      children: [
        {
          componentName: 'Typography.Paragraph',
          children: 'Some contents...',
        },
      ],
    },
  },
  {
    title: 'Bottom Drawer',
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/drawer-2.png',
    schema: {
      componentName: 'Drawer',
      props: {
        title: 'Basic Drawer',
        visible: true,
        placement: 'bottom',
        destroyOnClose: true,
      },
      children: [
        {
          componentName: 'Typography.Paragraph',
          children: 'Some contents...',
        },
      ],
    },
  },
];
