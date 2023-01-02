import snippets from './snippets';

export default {
  snippets,
  componentName: 'PageHeader',
  title: 'Header',
  category: 'Navigation',
  props: [
    {
      name: 'title',
      title: { label: 'Title', tip: 'custom header text' },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'subTitle',
      title: { label: 'subTitle', tip: 'Customized secondary title text' },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'ghost',
      title: { label: 'ghostStyle', tip: 'Ghost style' },
      propType: 'bool',
      defaultValue: true,
    },
    // {
    //   name: 'backIcon',
    //   title: {
    //     label: '返回按钮',
    //     tip: '自定义 back icon ，如果为 false 不渲染 back icon',
    //   },
    //   propType: { type: 'oneOfType', value: ['node', 'bool'] },
    // },
    {
      name: 'tags',
      title: { label: 'tags', tip: 'A list of tags next to the title' },
      propType: 'node',
    },
    {
      name: 'extra',
      title: { label: 'extra', tip: 'Action area, at the end of the title line' },
      propType: 'node',
    },
    {
      name: 'footer',
      title: { label: 'footer', tip: 'The footer of PageHeader, generally used to render TabBar' },
      propType: 'node',
    },
    {
      name: 'avatar',
      title: { label: 'avatar', tip: 'Avatar next to the title bar' },
      propType: 'object',
      supportVariable: false,
      setter: [
        {
          componentName: 'ObjectSetter',
          props: {
            config: {
              items: [
                {
                  name: 'src',
                  title: { label: 'address', tip: 'Avatar address' },
                  setter: {
                    componentName: 'StringSetter',
                  },
                },
              ],
            },
          },
        },
        'JsonSetter',
      ],
    },
    {
      name: 'breadcrumb',
      title: { label: 'breadcrumb', tip: 'breadcrumb' },
      propType: 'object',
      supportVariable: false,
      setter: [
        {
          componentName: 'ObjectSetter',
          props: {
            config: {
              items: [
                {
                  name: 'routes',
                  title: { label: 'routes', tip: 'routing stack information' },
                  setter: {
                    componentName: 'ArraySetter',
                    props: {
                      itemSetter: {
                        componentName: 'ObjectSetter',
                        initialValue: {
                          path: 'path',
                          breadcrumbName: 'pathName',
                        },
                        isRequired: true,
                        props: {
                          config: {
                            items: [
                              {
                                name: 'path',
                                defaultValue: 'path',
                                title: { label: 'path', tip: 'path' },
                                setter: 'StringSetter',
                              },
                              {
                                name: 'breadcrumbName',
                                defaultValue: 'pathName',
                                title: {
                                  label: 'name',
                                  tip: 'breadcrumbName',
                                },
                                setter: 'StringSetter',
                              },
                            ],
                          },
                        },
                      },
                    },
                  },
                },
              ],
            },
          },
        },
        'JsonSetter',
      ],
    },
    {
      name: 'onBack',
      title: { label: 'onBack', tip: 'Back button click event' },
      propType: 'func',
    },
  ],
  configure: {
    supports: {
      style: true,
      events: [
        {
          name: 'onBack',
          template: "onBack(${extParams}){\n//Click event of the back button\nconsole.log('onBack');}",
        },
      ],
    },
  },
};
