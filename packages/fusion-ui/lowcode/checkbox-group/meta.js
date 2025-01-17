import { wrapFormItemProps } from '../utils/form-utils';

export default {
  componentName: 'FormCheckboxGroup',
  isFormItemComponent: true,
  title: 'FormCheckboxGroup',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@dslc/fusion-ui',
    version: '{{version}}',
    exportName: 'FormCheckboxGroup',
    main: '',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: wrapFormItemProps([
      {
        name: 'disabled',
        title: 'disabled',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['BoolSetter', 'ExpressionSetter'],
          },
        },
      },
      {
        name: 'itemDirection',
        title: 'itemDirection',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              { title: 'horizontal', value: 'hoz' },
              { title: 'vertical', value: 'ver' },
            ],
          },
        },
        defaultValue: 'hoz',
      },
      {
        name: 'isPreview',
        title: 'isPreview',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        name: 'defaultValue',
        title: 'defaultValue',
        defaultValue: '[]',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['JsonSetter', 'ExpressionSetter'],
          },
        },
      },
      {
        name: 'dataSource',
        display: 'block',
        title: 'dataSource',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'ArraySetter',
                props: {
                  itemSetter: {
                    componentName: 'ObjectSetter',
                    props: {
                      config: {
                        items: [
                          {
                            name: 'label',
                            title: 'label',
                            setter: 'StringSetter',
                          },
                          {
                            name: 'value',
                            title: 'value',
                            setter: 'StringSetter',
                          },
                        ],
                      },
                    },
                    initialValue: {
                      label: 'option one',
                      value: '1',
                    },
                  },
                },
              },
              'ExpressionSetter',
            ],
          },
        },
      },
      {
        type: 'group',
        title: 'Advanced',
        display: 'block',
        items: [
          {
            name: 'id',
            title: {
              label: {
                type: 'i18n',
                zh_CN: '唯一标识',
                en_US: 'ID',
              },
              tip: {
                type: 'i18n',
                zh_CN: '属性: id | 说明: 唯一标识',
                en_US: 'prop: id | description: switch id',
              },
            },
            setter: 'StringSetter',
          },
          {
            name: 'name',
            title: {
              label: {
                type: 'i18n',
                zh_CN: '表单标识',
                en_US: 'Name',
              },
              tip: {
                type: 'i18n',
                zh_CN: '属性: name | 说明: 表单标识',
                en_US: 'prop: name | description: switch name',
              },
            },
            setter: 'StringSetter',
          },
        ],
      },
      // {
      //   name: "renderPreview",
      //   title: "预览态模式下渲染的内容",
      //   display: "block",
      //   setter: {
      //     componentName: "FunctionSetter"
      //   },
      //   condition(target) {
      //     return target.getProps().getPropValue("isPreview") || false;
      //   }
      // }
    ]),
    supports: {
      style: true,
      events: ['onChange'],
    },
    advanced: {
      initials: [
        {
          name: 'dataSource',
          initial: () => {
            return [
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
            ];
          },
        },
      ],
    },
  },
  icon: '',
  category: 'Form',
};
