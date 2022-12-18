import { uuid } from '../_utils/utils';

import snippets from './snippets';

export default {
  snippets,
  componentName: 'Descriptions',
  title: 'Descriptions',
  category: 'Data Display',
  props: [
    {
      name: 'title',
      title: {
        label: 'Title',
        tip: 'The title of the description list, displayed at the very top',
      },
      propType: {
        type: 'oneOfType',
        value: ['string', 'node'],
      },
    },
    {
      name: 'items',
      title: {
        label: 'items',
        tip: 'items',
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
                    name: 'key',
                    title: 'key',
                    setter: 'StringSetter',
                    initialValue: (val) => val || uuid(),
                    condition: () => false,
                  },
                  {
                    name: 'label',
                    title: 'Title',
                    setter: 'StringSetter',
                    initialValue: 'list item',
                  },
                  {
                    name: 'span',
                    title: 'spam',
                    setter: 'NumberSetter',
                    initialValue: 1,
                  },
                  {
                    name: 'children',
                    title: 'content',
                    setter: {
                      componentName: 'SlotSetter',
                      initialValue: {
                        type: 'JSSlot',
                        value: [],
                      },
                    },
                  },
                ],
              },
            },
            initialValue: () => {
              return {
                key: uuid(),
                label: 'tag item',
                span: 1,
                children: {
                  type: 'JSSlot',
                  value: [],
                },
              };
            },
          },
        },
      },
      extraProps: {
        getValue(target, fieldValue) {
          const map = target.node.children.map((child) => {
            const key = child.getPropValue('key') ? String(child.getPropValue('key')) : child.id;
            return {
              key,
              label: child.getPropValue('label'),
              span: child.getPropValue('span'),
              children: child.getPropValue('children'),
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
            const tabItem = Object.assign({}, item);
            map[item.key] = tabItem;
          });

          node.children.mergeChildren(
            (child) => {
              const key = String(child.getPropValue('key'));
              if (Object.hasOwnProperty.call(map, key)) {
                child.setPropValue('label', map[key].label);
                child.setPropValue('span', map[key].span);
                child.setPropValue('children', map[key].children);
                delete map[key];
                return false;
              }
              return true;
            },
            () => {
              const items = [];
              for (const key in map) {
                if (Object.hasOwnProperty.call(map, key)) {
                  items.push({
                    componentName: 'Descriptions.Item',
                    props: map[key],
                  });
                }
              }
              return items;
            },
            (child1, child2) => {
              const a = value.findIndex(
                (item) => String(item.key) === String(child1.getPropValue('key')),
              );
              const b = value.findIndex(
                (item) => String(item.key) === String(child2.getPropValue('key')),
              );
              return a - b;
            },
          );
        },
        // getValue(target, fieldValue) {
        //   // const node = target.nodes[0];
        //   // const children = node.getChildren();
        //   const map = target.node.children.map(child => {
        //     return {
        //       key: child.getPropValue('key') || uuid(),
        //       label: child.getPropValue('label'),
        //       span: child.getPropValue('span'),
        //       children: child.getPropValue('children'),
        //     };
        //   });
        //   return map;
        // },
        // setValue(target, value) {
        //   const node = target.node;

        //   if (!Array.isArray(value)) {
        //     value = [];
        //   }

        //   node.children.mergeChildren(
        //     () => true,
        //     () => {
        //       return value.map(item => ({
        //         componentName: 'Descriptions.Item',
        //         props: Object.assign({}, item),
        //       }));
        //     }
        //   );
        // },
      },
    },
    {
      name: 'bordered',
      title: { label: 'bordered', tip: 'bordered' },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'column',
      title: {
        label: 'Number of columns',
        tip: 'The number of list items in a row',
      },
      propType: 'number',
      defaultValue: 3,
    },
    {
      name: 'size',
      title: {
        label: 'size',
        tip:
          'Set the size of the list. Can be set to `middle`, `small`, or left blank (only if `bordered={true}` is set)',
      },
      propType: { type: 'oneOf', value: ['default', 'middle', 'small'] },
      defaultValue: 'middle',
    },
    {
      name: 'layout',
      title: { label: 'layout', tip: 'describe the layout' },
      propType: { type: 'oneOf', value: ['horizontal', 'vertical'] },
      defaultValue: 'horizontal',
    },
    {
      name: 'colon',
      title: {
        label: 'colon',
        tip: 'Configure the default value of `colon` for `Descriptions.Item`',
      },
      propType: 'bool',
      defaultValue: true,
    },
  ],
  configure: {
    supports: { style: true },
  },
};
