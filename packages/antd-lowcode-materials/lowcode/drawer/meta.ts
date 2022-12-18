import snippets from './snippets';

export default {
  snippets,
  componentName: 'Drawer',
  title: 'Drawer',
  category: 'Feedback',
  props: [
    {
      title: 'Base',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'visible',
          title: { label: 'visible', tip: 'visible' },
          propType: 'bool',
          setter: 'BoolSetter',
        },
        {
          name: 'title',
          title: { label: 'Title', tip: 'title | 标题' },
          propType: { type: 'oneOfType', value: ['string', 'node'] },
          setter: [
            'StringSetter',
            {
              componentName: 'SlotSetter',
              title: 'title slot',
              initialValue: {
                type: 'JSSlot',
                value: [],
              },
            },
            'VariableSetter',
          ],
        },
      ],
    },
    {
      title: 'Exterior',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'placement',
          title: { label: 'placement', tip: 'placement' },
          propType: {
            type: 'oneOf',
            value: ['top', 'right', 'bottom', 'left'],
          },
          defaultValue: 'right',
          setter: {
            componentName: 'SelectSetter',
            props: {
              options: [
                {
                  title: 'top',
                  value: 'top',
                },
                {
                  title: 'right',
                  value: 'right',
                },
                {
                  title: 'bottom',
                  value: 'bottom',
                },
                {
                  title: 'left',
                  value: 'left',
                },
              ],
            },
          },
        },
        {
          name: 'size',
          title: { label: 'size', tip: 'size' },
          propType: { type: 'oneOf', value: ['default', 'large'] },
          defaultValue: 'default',
          setter: {
            componentName: 'RadioGroupSetter',
            props: {
              options: [
                {
                  title: 'default',
                  value: 'default',
                },
                {
                  title: 'large',
                  value: 'large',
                },
              ],
            },
          },
        },
        {
          name: 'width',
          title: { label: 'width', tip: 'width' },
          propType: { type: 'oneOfType', value: ['string', 'number'] },
          setter: ['StringSetter', 'NumberSetter', 'VariableSetter'],
        },
        {
          name: 'height',
          title: {
            label: 'height',
            tip: 'height, used when placement is top or bottom',
          },
          propType: { type: 'oneOfType', value: ['string', 'number'] },
          setter: ['StringSetter', 'NumberSetter', 'VariableSetter'],
        },
        {
          name: 'zIndex',
          title: { label: 'z-index', tip: '设置 Drawer 的 `z-index`' },
          propType: 'number',
          setter: 'NumberSetter',
        },
      ],
    },
    {
      title: 'Function',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'mask',
          title: { label: 'mask', tip: 'mask' },
          propType: 'bool',
          defaultValue: true,
          setter: 'BoolSetter',
        },
        {
          name: 'maskClosable',
          title: {
            label: 'Click mask to close',
            tip: 'maskClosable',
          },
          propType: 'bool',
          defaultValue: true,
          setter: 'BoolSetter',
        },
        {
          name: 'autoFocus',
          title: {
            label: 'autoFocus',
            tip: 'Whether to switch the focus to its DOM node after the drawer is expanded',
          },
          propType: 'bool',
          defaultValue: true,
          setter: 'BoolSetter',
        },
        {
          name: 'keyboard',
          title: {
            label: 'keyboard',
            tip: "Whether to support the keyboard to press Esc to close",
          },
          propType: 'bool',
          defaultValue: true,
          setter: 'BoolSetter',
        },
        {
          name: 'destroyOnClose',
          title: {
            label: 'destroyOnClose',
            tip: 'Destroy child elements in Drawer when closed',
          },
          propType: 'bool',
          defaultValue: false,
          setter: 'BoolSetter',
        },
        {
          name: 'closable',
          title: {
            label: 'closable',
            tip: 'Whether to display the close button in the upper left corner',
          },
          propType: 'bool',
          defaultValue: true,
          setter: 'BoolSetter',
        },
        {
          name: 'forceRender',
          title: { label: 'forceRender', tip: 'Pre-render elements inside the Drawer' },
          propType: 'bool',
          defaultValue: false,
          setter: 'BoolSetter',
        },
      ],
    },
    {
      title: 'Expansion slot',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'closeIcon',
          title: { label: 'closeIcon', tip: 'closeIcon' },
          propType: 'node',
          setter: {
            componentName: 'SlotSetter',
            title: 'closeIcon',
            initialValue: {
              type: 'JSSlot',
              value: [
                {
                  componentName: 'Icon',
                  props: {
                    type: 'CloseOutlined',
                    size: 16
                  },
                },
              ],
            },
          },
        },
        {
          name: 'extra',
          title: { label: 'extra', tip: 'The operating area in the upper right corner of the drawer' },
          propType: 'node',
          setter: {
            componentName: 'SlotSetter',
            title: 'Operating area slot',
            initialValue: {
              type: 'JSSlot',
              value: [],
            },
          },
        },
        {
          name: 'footer',
          title: { label: 'footer', tip: 'footer' },
          propType: 'node',
          setter: {
            componentName: 'SlotSetter',
            title: 'footer slot',
            initialValue: {
              type: 'JSSlot',
              value: [],
            },
          },
        },
      ],
    },
    {
      title: 'Other',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'className',
          title: { label: 'className', tip: 'className' },
          propType: 'string',
          setter: 'StringSetter',
        },
        {
          name: 'drawerStyle',
          title: 'drawerStyle',
          type: 'group',
          extraProps: {
            display: 'entry',
          },
          items: [
            {
              name: 'drawerStyle',
              title: {
                label: 'drawerStyle',
                tip: 'drawerStyle',
              },
              setter: 'StyleSetter',
              extraProps: {
                display: 'block',
              },
            },
          ],
        },
        {
          name: 'contentWrapperStyle',
          title: 'contentWrapperStyle',
          type: 'group',
          extraProps: {
            display: 'entry',
          },
          items: [
            {
              name: 'contentWrapperStyle',
              title: {
                label: 'contentWrapperStyle',
                tip: 'contentWrapperStyle',
              },
              setter: 'StyleSetter',
              extraProps: {
                display: 'block',
              },
            },
          ],
        },
        {
          name: 'headerStyle',
          title: 'headerStyle',
          type: 'group',
          extraProps: {
            display: 'entry',
          },
          items: [
            {
              name: 'headerStyle',
              title: {
                label: 'headerStyle',
                tip: 'headerStyle',
              },
              setter: 'StyleSetter',
              extraProps: {
                display: 'block',
              },
            },
          ],
        },
        {
          name: 'bodyStyle',
          title: 'bodyStyle',
          type: 'group',
          extraProps: {
            display: 'entry',
          },
          items: [
            {
              name: 'bodyStyle',
              title: {
                label: 'bodyStyle',
                tip: 'bodyStyle',
              },
              setter: 'StyleSetter',
              extraProps: {
                display: 'block',
              },
            },
          ],
        },
        {
          name: 'footerStyle',
          title: 'footerStyle',
          type: 'group',
          extraProps: {
            display: 'entry',
          },
          items: [
            {
              name: 'footerStyle',
              title: {
                label: 'footerStyle',
                tip: 'footerStyle',
              },
              setter: 'StyleSetter',
              extraProps: {
                display: 'block',
              },
            },
          ],
        },
        {
          name: 'maskStyle',
          title: 'maskStyle',
          type: 'group',
          extraProps: {
            display: 'entry',
          },
          items: [
            {
              name: 'maskStyle',
              title: {
                label: 'maskStyle',
                tip: 'maskStyle',
              },
              setter: 'StyleSetter',
              extraProps: {
                display: 'block',
              },
            },
          ],
        },
      ],
    },
  ],
  configure: {
    component: {
      isContainer: true,
      isModal: true,
      nestingRule: {
        parentWhitelist: ['Page', 'Component'],
      },
    },
    supports: {
      style: true,
      events: [
        {
          name: 'onClose',
          template:
            "onClose(event,${extParams}){\n//Callback for clicking the mask layer or the upper right fork or cancel button\nconsole.log('onClose',event);}",
        },
        {
          name: 'afterVisibleChange',
          template:
            "afterVisibleChange(visible,${extParams}){\n//Callback after the animation ends when switching drawers\nconsole.log('afterVisibleChange',visible);}",
        },
      ],
    },
  },
};
