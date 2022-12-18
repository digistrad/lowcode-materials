export default [
  {
    title: 'Input Box',
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/auto-complete-1.png',
    schema: {
      componentName: 'AutoComplete',
      props: {
        placeholder: 'Please enter',
        options: [
          {
            label: 'test 1',
            value: 'aaa',
          },
          {
            label: 'test 2',
            value: 'bbb',
          },
        ],
        filterOption: true,
        style: {
          width: '200px',
        },
      },
    },
  },
];
