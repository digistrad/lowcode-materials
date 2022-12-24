import { IProps } from '../types';

import { default as formItemProps } from '../pro-form/common/form-item-props';

export const wrapFormItemProps = (props: IProps[]) => {
  return [
    ...formItemProps,
    {
      name: 'componentProps',
      title: 'Component Configuration',
      extraProps: {
        display: 'accordion',
        defaultCollapsed: true,
      },
      type: 'group',
      items: props.filter((item) => item.title !== '高级'),
    },
  ];
};
