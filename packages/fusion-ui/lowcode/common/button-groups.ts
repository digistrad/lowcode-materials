import { IProps } from '../types/index';
import { hideProp } from '../utils';

export const buttonConfigureProps: IProps[] = [
  {
    name: 'children',
    title: 'Name',
    display: 'inline',
    initialValue: 'operate',
    isRequired: true,
    setter: 'StringSetter',
  },
  {
    name: 'type',
    title: 'type',
    display: 'inline',
    isRequired: true,
    initialValue: 'primary',
    setter: {
      componentName: 'SelectSetter',
      props: {
        options: [
          {
            title: 'normal',
            value: 'normal',
          },
          {
            title: 'primary',
            value: 'primary',
          },
          {
            title: 'secondary',
            value: 'secondary',
          },
        ],
      },
    },
  },
  {
    name: 'key',
    title: 'key',
    condition: hideProp,
    initialValue: (currentValue, defaultValue) =>
      currentValue || defaultValue || `data-${Math.random().toString(36).substr(-6)}`,
    setter: {
      componentName: 'StringSetter',
    },
  },
  {
    name: 'disabled',
    title: 'disabled',
    display: 'inline',
    initialValue: false,
    setter: 'BoolSetter',
  },
  {
    name: 'hidden',
    title: 'hidden',
    display: 'inline',
    initialValue: false,
    setter: 'BoolSetter',
  },
  {
    name: 'actionType',
    title: 'actionType(TODO)',
    condition: hideProp,
    display: 'inline',
    initialValue: 'batch',
    setter: {
      componentName: 'SelectSetter',
      props: {
        options: [
          // {
          //   title: '批量',
          //   value: 'batch',
          // },
          {
            title: 'formDialog',
            value: 'formDialog',
          },
          {
            title: 'link',
            value: 'link',
          },
          {
            title: 'import',
            value: 'import',
          },
          // {
          //   title: '同步',
          //   value: 'sync',
          // },
          {
            title: 'export',
            value: 'export',
          },
          // {
          //   title: '解析导出',
          //   value: 'analysisExport',
          // },
        ],
      },
    },
  },
  {
    name: 'onClick',
    title: 'onClick',
    setter: 'FunctionSetter',
  },
];
export const buttonGroupConfigureProp: IProps = {
  type: 'field',
  name: 'buttonGroup',
  title: 'Button Group',
  extraProps: {
    display: 'accordion',
  },
  setter: {
    componentName: 'ObjectSetter',
    props: {
      config: {
        items: [
          {
            name: 'text',
            title: {
              label: 'text',
              tip: 'Whether to set the button to text mode',
            },
            setter: 'BoolSetter',
          },
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
          {
            name: 'dataSource',
            title: 'dataSource',
            extraProps: {
              display: 'plain',
            },
            setter: {
              componentName: 'ArraySetter',
              props: {
                hideDescription: true,
                itemSetter: {
                  componentName: 'ObjectSetter',
                  props: {
                    config: {
                      items: buttonConfigureProps,
                    },
                  },
                  initialValue: () => ({
                    children: 'operate',
                    type: 'normal',
                  }),
                },
              },
            },
          },
        ],
      },
    },
  },
};
