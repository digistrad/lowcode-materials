export default [
  {
    title: 'Carousel',
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/carousel-1.jpg',
    schema: {
      componentName: 'Carousel',
      children: [
        {
          componentName: 'Card',
          props: {
            key: 'panel-1',
          },
        },
        {
          componentName: 'Card',
          props: {
            key: 'panel-2',
          },
        },
      ],
    },
  },
];
