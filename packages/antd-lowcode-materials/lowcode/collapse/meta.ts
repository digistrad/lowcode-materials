import { uuid } from '../_utils/utils';

import snippets from './snippets';

export default {
  snippets,
  componentName: 'Collapse',
  title: 'Accordion panel',
  category: 'Data Display',
  props: [
    {
      name: 'bordered',
      title: { label: 'bordered', tip: 'Accordion with border style' },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter',
      supportVariable: true
    },
    {
      name: 'accordion',
      title: { label: 'accordion', tip: 'accordion mode' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter',
      supportVariable: true
    },
    {
      name: 'collapsible',
      title: 'collapsible',
      propType: {
        type: 'oneOf',
        value: ['-', 'header', 'disabled'],
      },
    },
    // {
    //   name: 'expandIcon',
    //   title: { label: '自定义切换图标', tip: '自定义切换图标' },
    //   propType: 'func',
    // },
    {
      name: 'expandIconPosition',
      title: { label: 'expandIconPosition', tip: 'Set icon position' },
      propType: { type: 'oneOf', value: ['left', 'right'] },
    },
    {
      name: 'destroyInactivePanel',
      title: { label: 'destroyInactivePanel', tip: 'Destroy collapsed hidden panels' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter',
      supportVariable: true
    },
    {
      name: 'ghost',
      title: { label: 'ghost', tip: 'Make accordion transparent and borderless' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter',
      supportVariable: true
    },
    {
      name: 'collapses',
      title: 'collapses',
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
                    initialValue: (val) => val || uuid()
                  },
                  {
                    name: 'header',
                    title: 'header',
                    setter: 'StringSetter',
                    initialValue: 'collapsible item'
                  },
                ],
              },
            },
            initialValue: () => {
              return {
                key: uuid(),
                header: 'collapsible item',
                showArrow: true,
                collapsible: undefined,
                forceRender: false,
              };
            },
          },
        },
      },
      extraProps: {
        getValue(target, fieldValue) {
          console.log('getValue', target.node.children.length);
          const map = target.node.children.map((child) => {
            const key = child.getPropValue('key') ? String(child.getPropValue('key')) : child.id;
            return {
              key,
              header: child.getPropValue('header'),
              showArrow: child.getPropValue('showArrow'),
              collapsible: child.getPropValue('collapsible'),
              forceRender: child.getPropValue('forceRender'),
            };
          });
          return map;
        },
        setValue(target, value) {
          const { node } = target;
          const map = {};

          // console.log('setValue',value);

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
                child.setPropValue('header', map[key].header);
                child.setPropValue('showArrow', map[key].showArrow);
                child.setPropValue('collapsible', map[key].collapsible);
                child.setPropValue('forceRender', map[key].forceRender);
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
                    componentName: 'Collapse.Panel',
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
      },
    },
    {
      name: 'defaultActiveKey',
      title: { label: 'defaultActiveKey', tip: 'Initialize the key of the selected panel' },
      propType: {
        type: 'oneOfType',
        value: [
          'string',
          { type: 'arrayOf', value: 'string' },
          'number',
          { type: 'arrayOf', value: 'number' },
        ],
      },
    },
    {
      name: 'activeKey',
      title: {
        label: 'activeKey',
        tip: 'The key of the currently active tab panel',
      },
      propType: {
        type: 'oneOfType',
        value: [
          'string',
          { type: 'arrayOf', value: 'string' },
          'number',
          { type: 'arrayOf', value: 'number' },
        ],
      },
    },
  ],
  configure: {
    supports: {
      style: true,
      events: [
        {
          name: 'onChange',
          template: "onChange(${extParams}){\n//Callback of switching panel\nconsole.log('onChange');}",
        },
      ],
    },
    component: {
      isContainer: true,
    },
  },
};
