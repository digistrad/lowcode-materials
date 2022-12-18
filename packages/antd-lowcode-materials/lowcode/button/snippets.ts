export default [
  {
    title: 'primary button',
    screenshot: require('./__screenshots__/button-1.png'),
    schema: {
      componentName: 'Button',
      props: {
        type: 'primary',
        children: 'primary',
      },
    },
  },
  {
    title: 'secondary button',
    screenshot: require('./__screenshots__/button-2.png'),
    schema: {
      componentName: 'Button',
      props: {
        type: 'secondary',
        children: 'secondary',
      },
    },
  },
  {
    title: 'danger button',
    screenshot: require('./__screenshots__/button-3.png'),
    schema: {
      componentName: 'Button',
      props: {
        type: 'danger',
        children: 'danger',
      },
    },
  },
  {
    title: 'text button',
    screenshot: require('./__screenshots__/button-4.png'),
    schema: {
      componentName: 'Button',
      props: {
        type: 'text',
        children: 'text',
      },
    },
  },
  {
    title: 'dashed button',
    screenshot: require('./__screenshots__/button-5.png'),
    schema: {
      componentName: 'Button',
      props: {
        type: 'dashed',
        children: 'dashed',
      },
    },
  },
  {
    title: 'link button',
    screenshot: require('./__screenshots__/button-6.png'),
    schema: {
      componentName: 'Button',
      props: {
        type: 'link',
        children: 'link',
      },
    },
  },
];
