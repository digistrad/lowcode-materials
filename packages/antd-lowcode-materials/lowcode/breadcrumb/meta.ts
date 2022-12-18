import snippets from './snippets';

export default {
  snippets,
  componentName: 'Breadcrumb',
  title: 'Breadcrumb',
  category: 'Navigation',
  props: [
    {
      title: 'Block',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'routes',
          title: { label: 'routes', tip: 'router Routing stack information' },
          propType: {
            type: 'arrayOf',
            value: {
              type: 'shape',
              value: [
                { name: 'path', propType: 'string' },
                { name: 'breadcrumbName', propType: 'string' },
              ],
            },
          },
          setter: {
            componentName: 'ArraySetter',
            props: {
              itemSetter: {
                componentName: 'ObjectSetter',
                props: {
                  config: {
                    items: [
                      {
                        name: 'path',
                        title: { label: 'path', tip: 'path' },
                        propType: 'string',
                        setter: 'StringSetter',
                        isRequired: true
                      },
                      {
                        name: 'breadcrumbName',
                        title: {
                          label: 'breadcrumbName',
                          tip: 'breadcrumbName',
                        },
                        propType: 'string',
                        setter: 'StringSetter',
                        isRequired: true
                      },
                    ],
                  },
                },
                initialValue: {
                  path: 'path',
                  breadcrumbName: 'breadcrumbName',
                },
              },
            },
          },
        },
        {
          name: 'params',
          title: { label: 'params', tip: 'params' },
          propType: 'object',
          setter: 'JsonSetter',
        },
        {
          name: 'separator',
          title: { label: 'separator', tip: 'separator' },
          propType: { type: 'oneOfType', value: ['string', 'node'] },
          setter: [
            'StringSetter',
            {
              componentName: 'SlotSetter',
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
      title: 'Block',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'itemRender',
          title: {
            label: 'itemRender',
            tip: 'itemRender',
          },
          propType: { type: 'oneOfType', value: ['func', 'node'] },
          setter: [
            {
              componentName: 'SlotSetter',
              title: 'SlotSetter',
              initialValue: {
                type: 'JSSlot',
                params: ['route', 'params', 'routes', 'paths'],
                value: [],
              },
            },
            {
              componentName: 'FunctionSetter',
              props: {
                template:
                  'itemRender(route, params, routes, paths,${extParams}){\n//custom rendering\nreturn `${route.breadcrumbName}`}',
              },
            },
            'VariableSetter',
          ],
        },
      ],
    },
  ],
  configure: { supports: { style: true } },
};
