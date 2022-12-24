module.exports = [
  {
    title: 'Checkbox',
    screenshot:
      'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_menu.png',
    schema: {
      componentName: 'Checkbox',
      props: {
        label: 'Check Option',
      },
    },
  },
  {
    title: 'CheckboxGroup',
    screenshot: 'https://img.alicdn.com/tfs/TB1EJN7uYY1gK0jSZTEXXXDQVXa-112-64.png',
    schema: {
      componentName: 'CheckboxGroup',
      props: {
        prefix: 'next-',
        dataSource: [
          {
            label: 'option one',
            value: '1',
          },
          {
            label: 'option two',
            value: '2',
          },
          {
            label: 'option three',
            value: '3',
          },
        ],
      },
    },
  },
];
