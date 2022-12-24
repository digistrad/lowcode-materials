import { ComponentMetadata, Snippet } from '@ali/lowcode-types';
import { formItemsProps } from '../pro-form/common/form-base-props';
import { showWithLabelAlign } from '../utils';
import { operations } from '../common';

const operationConfig = {
  name: 'operationConfig',
  display: 'accordion',
  title: 'operationConfig',
  setter: {
    componentName: 'ObjectSetter',
    props: {
      config: {
        items: [
          {
            name: 'visibleButtonCount',
            title: {
              label: 'visibleButtonCount',
              tip: 'More than this amount will be put away in "More" menu',
            },
            extraProps: {
              defaultValue: 3,
            },
            setter: {
              componentName: 'NumberSetter',
              props: {
                max: 6,
                min: 1,
              },
            },
          },
        ],
      },
    },
  },
};

const FilterMeta: ComponentMetadata = {
  componentName: 'Filter',
  title: 'Query Filter',
  group: 'Featured',
  category: 'Form',
  tags: ['business component'],
  docUrl: '',
  icon: 'https://img.alicdn.com/imgextra/i1/O1CN01O4Oshp1RA6Z0sFZ6h_!!6000000002070-55-tps-56-56.svg',
  devMode: 'proCode',
  npm: {
    package: '@dslc/fusion-ui',
    version: '0.1.6-beta.8',
    exportName: 'Filter',
    main: 'lib/index.js',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: [
      {
        name: 'globalConfig',
        title: 'globalConfig',
        type: 'group',
        display: 'accordion',
        items: [
          {
            name: 'enableFilterConfiguration',
            title: 'enableFilterConfiguration',
            setter: 'BoolSetter',
          },
          {
            name: 'status',
            title: 'status',
            setter: {
              componentName: 'RadioGroupSetter',
              props: {
                options: [
                  {
                    title: 'readonly',
                    value: 'readonly',
                  },
                  {
                    title: 'editable',
                    value: 'editable',
                  },
                ],
              },
            },
            getValue: (target) => {
              const isPreview = target.getProps().getPropValue('isPreview');
              return isPreview ? 'readonly' : 'editable';
            },
            setValue: (target, value) => {
              target.getProps().setPropValue('isPreview', value === 'readonly');
            },
            defaultValue: 'editable',
          },
          {
            name: 'isPreview',
            condition: () => false,
            title: {
              label: {
                type: 'i18n',
                zh_CN: '预览态',
                en_US: 'Preview Mode',
              },
              tip: {
                type: 'i18n',
                zh_CN: '属性: isPreview | 说明: 是否开启预览态',
                en_US: 'prop: isPreview | description: preview mode',
              },
            },
            setter: 'BoolSetter',
          },
          {
            name: 'cols',
            title: 'Layout',
            setter: {
              componentName: 'RadioGroupSetter',
              props: {
                options: [
                  {
                    title: 'a row',
                    value: 1,
                  },
                  {
                    title: 'two columns',
                    value: 2,
                  },
                  {
                    title: 'three columns',
                    value: 3,
                  },
                  {
                    title: 'four columns',
                    value: 4,
                  },
                ],
              },
            },
            defaultValue: 4,
          },
          {
            name: 'labelAlign',
            title: {
              label: {
                type: 'i18n',
                zh_CN: '标签位置',
                en_US: 'Label Align',
              },
              tip: {
                type: 'i18n',
                zh_CN: '属性: labelAlign | 说明: 标签的位置\n@enum desc 上, 左, 内',
                en_US: 'prop: labelAlign | description: label align',
              },
            },
            setter: {
              componentName: 'RadioGroupSetter',
              props: {
                options: [
                  {
                    title: 'top',
                    value: 'top',
                  },
                  {
                    title: 'left',
                    value: 'left',
                  },
                  {
                    title: 'inset',
                    value: 'inset',
                  },
                ],
              },
            },
            setValue: (target, value) => {
              if (value === 'inset') {
                target.getProps().setPropValue('labelCol', null);
                target.getProps().setPropValue('wrapperCol', null);
              } else if (value === 'left') {
                target.getProps().setPropValue('labelCol', { fixedSpan: 4 });
                target.getProps().setPropValue('wrapperCol', null);
              }
              return target.getProps().setPropValue('labelAlign', value);
            },
            defaultValue: 'top',
          },
          {
            name: 'labelCol.fixedSpan',
            title: 'titleSpan',
            condition: showWithLabelAlign,
            setter: {
              componentName: 'NumberSetter',
              props: {
                min: 0,
                max: 24,
              },
            },
          },
          {
            name: 'labelCol.offset',
            title: 'titleOffset',
            condition: showWithLabelAlign,
            setter: {
              componentName: 'NumberSetter',
              props: {
                min: 0,
                max: 24,
              },
            },
          },
          {
            name: 'wrapperCol.span',
            title: 'wrapperSpan',
            condition: showWithLabelAlign,
            setter: {
              componentName: 'NumberSetter',
              props: {
                min: 0,
                max: 24,
              },
            },
          },
          {
            name: 'wrapperCol.offset',
            title: 'wrapperOffset',
            condition: showWithLabelAlign,
            setter: {
              componentName: 'NumberSetter',
              props: {
                min: 0,
                max: 24,
              },
            },
          },
          {
            name: 'labelTextAlign',
            condition: showWithLabelAlign,
            title: {
              label: {
                type: 'i18n',
                zh_CN: '标签对齐',
                en_US: 'Text Align',
              },
              tip: {
                type: 'i18n',
                zh_CN: '属性: labelTextAlign | 说明: 标签的左右对齐方式\n@enumdesc 左, 右',
                en_US: 'prop: labelTextAlign | description: label text align',
              },
            },
            setter: {
              componentName: 'RadioGroupSetter',
              props: {
                options: ['left', 'right'],
              },
            },
            defaultValue: 'right',
          },
        ],
      },
      formItemsProps,
      operationConfig,
      operations,
    ],
    supports: {
      style: true,
      className: true,
      events: ['onExpand', 'onSearch', 'onReset'],
    },
    component: {
      isMinimalRenderUnit: true,
    },
  },
};
const snippets: Snippet[] = [
  {
    title: 'Query Filter',
    screenshot:
      'https://img.alicdn.com/imgextra/i1/O1CN01O4Oshp1RA6Z0sFZ6h_!!6000000002070-55-tps-56-56.svg',
    schema: {
      componentName: 'Filter',
      id: 'node_ockt5mo4jj1',
      props: {
        labelAlign: 'top',
      },
      children: [...new Array(4).keys()].map((item) => ({
        componentName: 'FormInput',
        props: {
          formItemProps: {
            primaryKey: String(Math.floor(Math.random() * 10000) + item),
            label: 'Form Item',
            size: 'medium',
            device: 'desktop',
            fullWidth: true,
          },
          placeholder: 'Please enter',
        },
        
      })),
    },
  },
];

export default {
  ...FilterMeta,
  snippets,
};
