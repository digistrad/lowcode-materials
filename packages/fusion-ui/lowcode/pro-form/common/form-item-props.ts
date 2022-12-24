import React from 'react';
import { IProps } from '../../types';

import {
  showWithLabelAlign,
  showWithLabelAlignShortcut,
  hideProp,
  getParentValue,
  mockId,
} from '../../utils';

const primaryKeyConfig = {
  name: 'primaryKey',
  title: 'primaryKey',
  display: 'none',
  condition: hideProp,
  defaultValue: (val: any) => {
    if (val) return val;
    return mockId();
  },
  setter: 'StringSetter',
};

const columnSpanConfig = {
  name: 'columnSpan',
  title: 'columnSpan',
  defaultValue: 1,
  setter: (target) => {
    const parentColumns = target.parent.getPropValue('columns');
    const options = [
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
    ].slice(0, parentColumns);
    return {
      componentName: 'RadioGroupSetter',
      props: {
        options,
      },
    };
  },
};

const labelConfig = {
  name: 'label',
  title: 'Title',
  display: 'inline',
  defaultValue: 'form item',
  setter: 'StringSetter',
  important: true,
  supportVariable: true,
};

const idConfig = {
  name: 'id',
  condition: hideProp,
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
};

const nameConfig = {
  name: 'name',
  title: {
    label: {
      type: 'i18n',
      zh_CN: '表单标识',
      en_US: 'Name',
    },
    tip: {
      type: 'i18n',
      zh_CN: '属性: name | 说明: 表单标识，用于表单校验',
      en_US: 'prop: name | description: form item name',
    },
  },
  setter: 'StringSetter',
};

const helpConfig = {
  name: 'help',
  title: {
    label: {
      type: 'i18n',
      zh_CN: '错误提示',
      en_US: 'Help Info',
    },
    tip: {
      type: 'i18n',
      zh_CN: '属性: help | 说明: 自定义提示信息, 如不设置，则会根据校验规则自动生成.',
      en_US: 'prop: help | description: help infomation',
    },
  },
  setter: 'StringSetter',
};

const extraConfig = {
  name: 'extra',
  title: {
    label: {
      type: 'i18n',
      zh_CN: '帮助提示',
      en_US: 'Extra Info',
    },
    tip: {
      type: 'i18n',
      zh_CN:
        '属性: extra | 说明: 额外的提示信息, 和 help 类似，当需要错误信息和提示文案同时出现时，可以使用这个。 位于错误信息后面',
      en_US: 'prop: extra | description: extra infomation',
    },
  },
  setter: 'StringSetter',
};

const validateStateConfig = {
  name: 'validateState',
  title: {
    label: 'validateState',
    tip: 'If not set, it will be automatically generated according to the verification rules\n@enum desc failure, success, verification, warning',
  },
  setter: {
    componentName: 'RadioGroupSetter',
    props: {
      options: ['error', 'success', 'loading', 'warning'],
    },
  },
};

const sizeConfig = {
  name: 'size',
  title: {
    label: 'size',
    tip: 'The size customization of a single Item has a higher priority than the size of the Form, and when the component is used with the Item, the size attribute set by the component itself is invalid.',
  },
  setter: {
    componentName: 'RadioGroupSetter',
    props: {
      options: ['small', 'medium', 'large'],
    },
  },
  defaultValue: 'medium',
};

const labelAlignConfig = {
  name: 'labelAlign',
  title: {
    label: 'labelAlign',
    tip: 'Top, Left, Inset',
  },
  condition: hideProp,
  getValue: getParentValue,
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
        {
          title: 'default',
          value: '',
        },
      ],
    },
  },
};

const labelColFixedSpanConfig = {
  name: 'labelCol.fixedSpan',
  title: 'labelCol.fixedSpan',
  condition: showWithLabelAlign,
  getValue: getParentValue,
  setter: {
    componentName: 'NumberSetter',
    props: {
      min: 0,
      max: 24,
    },
  },
};

const labelColOffsetConfig = {
  name: 'labelCol.offset',
  title: 'labelCol.offset',
  condition: showWithLabelAlign,
  getValue: getParentValue,
  setter: {
    componentName: 'NumberSetter',
    props: {
      min: 0,
      max: 24,
    },
  },
};

const wrapperColSpanConfig = {
  name: 'wrapperCol.span',
  title: 'wrapperCol.span',
  condition: showWithLabelAlign,
  getValue: getParentValue,
  setter: {
    componentName: 'NumberSetter',
    props: {
      min: 0,
      max: 24,
    },
  },
};

const wrapperColOffsetConfig = {
  name: 'wrapperCol.offset',
  title: 'wrapperCol.offset',
  condition: showWithLabelAlign,
  getValue: getParentValue,
  setter: {
    componentName: 'NumberSetter',
    props: {
      min: 0,
      max: 24,
    },
  },
};

const labelTipEnableConfig = {
  name: 'labelTip.enable',
  title: 'labelTip.enable',
  condition: showWithLabelAlign,
  setter: {
    componentName: 'BoolSetter',
  },
};

const labelTipContentConfig = {
  name: 'labelTip.content',
  title: 'labelTip.content',
  condition: showWithLabelAlign,
  setter: {
    componentName: 'StringSetter',
  },
};

const labelTipIconConfig = {
  name: 'labelTip.icon',
  title: 'labelTip.icon',
  condition: showWithLabelAlign,
  setter: {
    componentName: 'IconSetter',
  },
};

const labelTextAlignConfig = {
  name: 'labelTextAlign',
  condition: showWithLabelAlign,
  title: {
    label: 'labelTextAlign',
    tip: 'left, right',
  },
  setter: {
    componentName: 'RadioGroupSetter',
    props: {
      options: [
        {
          title: 'left',
          value: 'left',
        },
        {
          title: 'right',
          value: 'right',
        },
        {
          title: 'default',
          value: '',
        },
      ],
    },
  },
  defaultValue: 'right',
};

const deviceConfig = {
  name: 'device',
  title: {
    label: 'device',
  },
  setter: {
    componentName: 'RadioGroupSetter',
    props: {
      options: ['phone', 'tablet', 'desktop'],
    },
  },
  defaultValue: 'desktop',
};

const requiredConfig = {
  name: 'required',
  defaultValue: false,
  title: {
    label: 'required',
    tip: 'required',
  },
  setter: {
    componentName: 'BoolSetter',
  },
  extraProps: {
    setValue: (target, value) => {
      if (value === true) {
        const name = target.parent.getPropValue('name');
        if (!name) {
          target.parent.setPropValue('name', mockId());
        }
      }
      target.parent.setValue(target.parent.getValue());
    },
  },
};

const fullWidthConfig = {
  name: 'fullWidth',
  defaultValue: true,
  title: {
    label: 'fullWidth',
    tip: 'Whether the width of the form class component in a single item is 100%',
  },
  setter: {
    componentName: 'BoolSetter',
  },
};

const isPreviewConfig = {
  name: 'isPreview',
  title: {
    label: 'isPreview',
    tip: 'Whether to enable the preview state',
  },
  setter: 'BoolSetter',
};

const autoValidateConfig = {
  name: 'autoValidate',
  title: {
    label: 'autoValidate',
    tip: 'Whether to automatically trigger verification when modifying data',
  },
  setter: 'BoolSetter',
};

const validationConfig = {
  type: 'group',
  name: 'validation',
  display: 'accordion',
  defaultCollapsed: true,
  title: 'Validation',
  items: [
    {
      type: 'group',
      name: 'notNullValidation',
      display: 'popup',
      title: 'notNullValidation',
      items: [
        {
          name: 'required',
          title: {
            label: 'required',
            tip: '[Form validation] cannot be empty',
          },
          setter: 'BoolSetter',
        },
        {
          name: 'requiredMessage',
          title: {
            label: 'requiredMessage',
            tip: 'Custom error message when [Form Validation] is empty',
          },
          setter: 'StringSetter',
        },
      ],
    },
    {
      type: 'group',
      name: 'maxValidation',
      display: 'popup',
      title: 'Max/Min Validation',
      items: [
        {
          name: 'min',
          title: {
            label: 'min',
            tip: 'min',
          },
          setter: 'NumberSetter',
        },
        {
          name: 'max',
          title: {
            label: 'max',
            tip: 'max',
          },
          setter: 'NumberSetter',
        },
        {
          name: 'minmaxMessage',
          title: {
            label: 'minmaxMessage',
            tip: 'minmaxMessage',
          },
          setter: 'StringSetter',
        },
      ],
    },
    {
      type: 'group',
      name: 'maxLenValidation',
      display: 'popup',
      title: 'Max/Min Length Validation',
      items: [
        {
          name: 'minLength',
          title: {
            label: 'minLength',
            tip: '[Form Validation] Minimum length of string /Minimum number of arrays',
          },
          setter: 'NumberSetter',
        },
        {
          name: 'maxLength',
          title: {
            label: 'maxLength',
            tip: '[Form Validation] Maximum length of string /maximum number of arrays',
          },
          setter: 'NumberSetter',
        },
        {
          name: 'minmaxLengthMessage',
          title: {
            label: 'minmaxLengthMessage',
            tip: '[Form validation] minLength/maxLength custom error message',
          },
          setter: 'StringSetter',
        },
      ],
    },
    {
      type: 'group',
      name: 'lengthValidation',
      display: 'popup',
      title: 'lengthValidation',
      items: [
        {
          name: 'length',
          title: {
            label: 'length',
            tip: '[Form Validation] The exact length of the string /the exact number of the array',
          },
          setter: 'NumberSetter',
        },
        {
          name: 'lengthMessage',
          title: {
            label: 'lengthMessage',
            tip: '[Form validation] minLength/maxLength custom error message',
          },
          setter: 'StringSetter',
        },
      ],
    },
    {
      type: 'group',
      name: 'regValidation',
      display: 'popup',
      title: 'RegEx Validation',
      items: [
        {
          name: 'pattern',
          title: {
            label: 'pattern',
            tip: '[Form Validation] Regular Expression validation',
          },
          setter: 'StringSetter',
        },
        {
          name: 'patternMessage',
          title: {
            label: 'patternMessage',
            tip: '[Form validation] pattern custom error message',
          },
          setter: 'StringSetter',
        },
      ],
    },
    {
      type: 'group',
      name: 'formatValidation',
      display: 'popup',
      title: 'formatValidation',
      items: [
        {
          name: 'format',
          title: {
            label: 'format',
            tip: '[Form Validation] Four commonly used patterns',
          },
          setter: {
            componentName: 'RadioGroupSetter',
            props: {
              options: ['number', 'email', 'url', 'tel'],
            },
          },
        },
        {
          name: 'formatMessage',
          title: {
            label: 'formatMessage',
            tip: '[Form validation] format custom error message',
          },
          setter: 'StringSetter',
        },
      ],
    },
    {
      name: 'validator',
      display: 'popup',
      title: {
        label: 'customValidator',
      },
      setter: 'FunctionSetter',
    },
  ],
};

const childFormConfig = {
  name: 'childForm',
  title: 'Child Form',
  setter: {
    componentName: 'SlotSetter',
    initialValue: {
      type: 'JSSlot',
      visible: false,
      value: [
        {
          componentName: 'ChildForm',
          props: {
            primaryKey: String(Math.floor(Math.random() * 10000)),
            placeholder: 'Please add a form item in the right panel+',
            placeholderStyle: {
              height: '38px',
              color: '#0088FF',
              background: '#d8d8d836',
              border: 0,
              gridArea: 'span 4 / span 4',
            },
            columns: 3,
            labelCol: {
              fixedSpan: 4,
            },
            labelAlign: 'top',
            emptyContent: 'Add form item',
          },
          children: [...new Array(3).keys()].map((item) => ({
            componentName: 'FormInput',
            props: {
              formItemProps: {
                primaryKey: String(Math.floor(Math.random() * 10000) + item),
                label: 'Form item',
                size: 'medium',
                device: 'desktop',
                fullWidth: true,
              },
              placeholder: 'Please enter',
            },
          })),
        },
      ],
    },
  },
};

export const formItemProps = [
  primaryKeyConfig,
  idConfig,
  nameConfig,
  columnSpanConfig,
  labelConfig,
  childFormConfig,
  helpConfig,
  extraConfig,
  validateStateConfig,
  sizeConfig,
  labelAlignConfig,
  labelColFixedSpanConfig,
  labelColOffsetConfig,
  wrapperColSpanConfig,
  wrapperColOffsetConfig,
  labelTipEnableConfig,
  labelTipIconConfig,
  labelTipContentConfig,
  labelTextAlignConfig,
  deviceConfig,
  requiredConfig,
  fullWidthConfig,
  isPreviewConfig,
  autoValidateConfig,
  validationConfig,
];

export const formItemShortcutProps = [
  primaryKeyConfig,
  nameConfig,
  labelConfig,
  sizeConfig,
  columnSpanConfig,
  childFormConfig,
  {
    name: 'labelTip.enable',
    title: 'labelTip.enable',
    condition: showWithLabelAlignShortcut,
    setter: {
      componentName: 'BoolSetter',
    },
  },
  {
    name: 'labelTip.icon',
    title: 'labelTip.icon',
    condition: showWithLabelAlignShortcut,
    setter: {
      componentName: 'IconSetter',
    },
  },
  {
    name: 'labelTip.content',
    title: 'labelTip.content',
    condition: showWithLabelAlignShortcut,
    setter: {
      componentName: 'StringSetter',
    },
  },
  requiredConfig,
  fullWidthConfig,
  isPreviewConfig,
  autoValidateConfig,
  {
    name: '!entry',
    title: 'Component detailed configuration',
    display: 'block',
    setter: (target) => {
      return React.createElement(
        Next.Button,
        {
          onClick: () => {
            const { node } = target;
            node.children.get(target.parent.key).select();
          },
        },
        'Configure',
      );
    },
  },
];

const props: IProps[] = [
  {
    name: 'formItemProps',
    title: 'Form item configuration',
    extraProps: {
      display: 'accordion',
      defaultCollapsed: true,
    },
    setter: {
      componentName: 'ObjectSetter',
      props: {
        config: {
          items: formItemProps,
        },
      },
    },
  },
];

export default props;
