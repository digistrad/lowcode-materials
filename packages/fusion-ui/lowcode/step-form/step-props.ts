import { hideProp } from '../utils';

export default [
  {
    name: '!items',
    title: 'items',
    setter: {
      componentName: 'ArraySetter',
      props: {
        itemSetter: {
          componentName: 'ObjectSetter',
          props: {
            config: {
              items: [
                {
                  name: 'icon',
                  title: 'icon',
                  important: true,
                  setter: 'IconSetter',
                },
                {
                  name: 'title',
                  title: 'Title',
                  important: true,
                  setter: 'StringSetter',
                },
                {
                  name: 'status',
                  title: {
                    label: 'status',
                    tip: 'The status of the step, if not passed, will be generated according to the current property of the outer Step, the optional values ​​are `wait`, `process`, `finish`',
                  },
                  setter: {
                    componentName: 'RadioGroupSetter',
                    props: { options: ['wait', 'process', 'finish'] },
                  },
                },
                {
                  name: 'content',
                  title: {
                    label: 'content',
                    tip: 'content| content padding, invalid when shape is arrow',
                  },
                  condition: hideProp,
                  setter: 'TextAreaSetter',
                  description: 'content padding, invalid when shape is arrow',
                },
                {
                  name: 'percent',
                  title: 'percent',
                  setter: 'NumberSetter',
                  description: 'percent',
                },
                {
                  name: 'disabled',
                  title: 'disabled',
                  setter: 'BoolSetter',
                  description: 'disabled',
                },
              ],
            },
          },
          initialValue: () => {
            return {
              primaryKey: String(Math.floor(Math.random() * 10000)),
              title: 'StepItem',
            };
          },
        },
      },
    },
    getValue(target) {
      // const node = target.node;
      // const children = node.children;
      const map = target.node.children.map((child) => {
        const stepItemProps = child.getPropValue('stepItemProps') || {};
        const primaryKey = stepItemProps.primaryKey ? stepItemProps.primaryKey : child.id;
        return {
          ...stepItemProps,
          primaryKey,
        };
      });
      return map;
    },
    setValue(target, value) {
      const { node } = target;
      const map = {};
      if (!Array.isArray(value)) {
        value = [];
      }
      value.forEach((item) => {
        const tabitem = Object.assign({}, item);
        map[item.primaryKey] = tabitem;
      });

      node.children.mergeChildren(
        (child) => {
          const primaryKey = String(child.getPropValue('primaryKey'));
          if (Object.hasOwnProperty.call(map, primaryKey)) {
            child.setPropValue('stepItemProps', map[primaryKey]);
            delete map[primaryKey];
            return false;
          }
          return true;
        },
        () => {
          const items = [];
          for (const primaryKey in map) {
            if (Object.hasOwnProperty.call(map, primaryKey)) {
              items.push({
                componentName: 'ProForm',
                props: {
                  columns: 1,
                  primaryKey,
                  stepItemProps: map[primaryKey],
                },
                children: [...new Array(3).keys()].map((item) => ({
                  componentName: 'FormInput',
                  props: {
                    formItemProps: {
                      primaryKey: String(Math.floor(Math.random() * 10000) + item),
                      label: 'form item',
                      size: 'medium',
                      device: 'desktop',
                      fullWidth: true,
                    },
                    placeholder: 'please enter',
                  },
                })),
              });
            }
          }
          return items;
        },
        (child1, child2) => {
          const a = value.findIndex(
            (item) => String(item.primaryKey) === String(child1.getPropValue('primaryKey')),
          );
          const b = value.findIndex(
            (item) => String(item.primaryKey) === String(child2.getPropValue('primaryKey')),
          );
          return a - b;
        },
      );
    },
  },
  {
    name: 'current',
    setter: (target) => {
      return {
        componentName: 'MixedSetter',
        props: {
          setters: [
            {
              componentName: 'SelectSetter',
              props: () => {
                const items = target.getProps().getPropValue('!items') || [];
                return {
                  options: items.map((item, index: number) => {
                    return {
                      title: `Step ${index + 1}: ${item.title}`,
                      value: `${index}`,
                    };
                  }),
                };
              },
            },
            'ExpressionSetter',
          ],
        },
      };
    },
    setValue: (target, value) => {
      target.parent.setPropValue('current', +value);
    },
    title: 'currentStep',
    defaultValue: 0,
  },
  {
    name: 'shape',
    title: 'shape',
    setter: (target) => {
      const options =
        target.getProps().getPropValue('direction') === 'ver'
          ? ['circle', 'dot']
          : ['circle', 'arrow', 'dot'];
      return {
        componentName: 'RadioGroupSetter',
        props: {
          options,
        },
      };
    },
    defaultValue: 'circle',
  },
  {
    name: 'direction',
    condition: (target) => {
      return target.getProps().getPropValue('shape') !== 'arrow';
    },
    setter: {
      componentName: 'RadioGroupSetter',
      props: {
        options: [
          { value: 'hoz', title: '横向' },
          { value: 'ver', title: '纵向' },
        ],
      },
    },
    title: 'direction',
    defaultValue: 'hoz',
  },
  {
    name: 'showAll',
    condition: (target) => {
      return target.getProps().getPropValue('direction') === 'ver';
    },
    title: 'showAll',
    setter: {
      componentName: 'BoolSetter',
    },
  },
  {
    name: 'labelPlacement',
    condition: hideProp,
    setter: {
      componentName: 'RadioGroupSetter',
      props: {
        options: ['hoz', 'ver'],
      },
    },
    title: 'labelPlacement',
    defaultValue: 'ver',
  },
  {
    name: 'readOnly',
    setter: 'BoolSetter',
    title: 'readOnly',
  },
  {
    name: 'animation',
    setter: 'BoolSetter',
    title: 'animation',
    defaultValue: true,
  },
];

export const operations = {
  name: 'operations',
  display: 'block',
  title: 'Action Items',
  getValue: (target, value) => {
    return value || [];
  },
  setter: {
    componentName: 'MixedSetter',
    props: {
      setters: [
        {
          componentName: 'SlotSetter',
          defaultValue: {
            type: 'JSSlot',
            value: [],
          },
        },
        {
          componentName: 'ArraySetter',
          props: {
            itemSetter: {
              componentName: 'ObjectSetter',
              props: {
                config: {
                  items: [
                    {
                      name: 'content',
                      display: 'inline',
                      title: 'text',
                      setter: 'StringSetter',
                      important: true,
                      extraProps: {
                        supportVariable: true,
                      },
                    },
                    {
                      name: 'action',
                      display: 'inline',
                      title: 'action',
                      important: true,
                      setValue: (target, value) => {
                        const actionNameMap = {
                          submit: 'Submit',
                          reset: 'Reset',
                          custom: 'Custom',
                        };
                        const actionName = actionNameMap[value] || '自定义';
                        target.parent.setPropValue('content', actionName);
                      },
                      setter: {
                        componentName: 'SelectSetter',
                        props: {
                          options: [
                            {
                              title: 'Submit',
                              value: 'submit',
                              action: 'submit',
                            },
                            {
                              title: 'Reset',
                              value: 'reset',
                              action: 'reset',
                            },
                            {
                              title: 'Previous',
                              value: 'previous',
                              action: 'previous',
                            },
                            {
                              title: 'Next',
                              value: 'next',
                              action: 'next',
                            },
                            {
                              title: 'Custom',
                              value: 'custom',
                            },
                          ],
                        },
                      },
                    },
                    {
                      name: 'type',
                      display: 'inline',
                      title: 'type',
                      important: true,
                      setter: {
                        componentName: 'SelectSetter',
                        props: {
                          options: [
                            {
                              title: 'primary',
                              value: 'primary',
                            },
                            {
                              title: 'primary',
                              value: 'secondary',
                            },
                            {
                              title: 'normal',
                              value: 'normal',
                            },
                          ],
                        },
                      },
                    },
                    {
                      name: 'behavior',
                      title: 'behavior',
                      display: 'block',
                      condition: (target) => {
                        const action = target.parent.getPropValue('action');
                        return !action || action === 'custom';
                      },
                      setter: {
                        componentName: 'BehaviorSetter',
                        props: {
                          actions: ['onClick'],
                        },
                      },
                    },
                    {
                      name: 'onClick',
                      display: 'inline',
                      title: 'onClick',
                      condition: hideProp,
                      setter: 'FunctionSetter',
                      extraProps: {
                        supportVariable: true,
                      },
                    },
                    {
                      name: 'htmlType',
                      condition: hideProp,
                    },
                    {
                      name: '!autoSubmit',
                      display: 'inline',
                      virtual: true,
                      title: 'autoSubmit',
                      setter: {
                        componentName: 'BoolSetter',
                      },
                      extraProps: {
                        setValue: (target, value) => {
                          target.parent.setPropValue('htmlType', value ? 'submit' : '');
                        },
                        getValue: (target, value) => {
                          return value === 'submit';
                        },
                      },
                      condition: (target) => {
                        return target.parent.getPropValue('action') !== 'submit';
                      },
                    },
                  ],
                },
              },
              initialValue: () => {
                return {
                  content: 'Submit',
                  action: 'submit',
                  type: 'secondary',
                };
              },
            },
          },
        },
      ],
    },
  },
};
