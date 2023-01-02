import { ComponentMetadata, Snippet } from '@ali/lowcode-types';
import { actionConfigure } from '../common/chart-action';
import { wrapWithCard } from '../pro-card/meta';

const AreaChartMeta: ComponentMetadata = {
  componentName: 'AreaChart',
  title: 'Area Chart',
  category: 'Chart',
  group: 'Featured',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: '@dslc/fusion-ui',
    version: '0.1.3-beta.3',
    exportName: 'AreaChart',
    main: 'lib/index.js',
    destructuring: true,
    subName: '',
  },
  props: [
    {
      name: 'ref',
      propType: {
        type: 'oneOfType',
        value: [
          {
            type: 'func',
            params: [
              {
                name: 'instance',
                propType: 'object',
              },
            ],
            returns: {
              propType: 'number',
            },
            raw: '(instance: unknown) => void',
          },
          'object',
        ],
      },
    },
    {
      name: 'key',
      propType: {
        type: 'oneOfType',
        value: ['string', 'number'],
      },
    },
    {
      name: 'style',
      propType: 'object',
    },
  ],
  configure: {
    props: [
      // 数据
      {
        name: 'data',
        type: 'group',
        display: 'accordion',
        title: {
          label: 'data',
        },
        items: [
          {
            name: 'data',
            title: 'chart data',
            setter: 'JsonSetter',
          },
          {
            name: 'xField',
            title: {
              label: 'xField',
              tip: 'x The data field name corresponding to the direction mapping',
            },
            setter: 'StringSetter',
          },
          {
            name: 'yField',
            title: {
              label: 'yField',
              tip: 'y The data field name corresponding to the direction mapping',
            },
            setter: 'StringSetter',
          },
        ],
      },
      // 图形属性
      {
        name: '',
        type: 'group',
        display: 'accordion',
        title: {
          label: 'Chart properties',
        },
        items: [
          {
            name: 'color',
            title: 'color',
            setter: 'ColorSetter',
          },
          {
            name: 'line.size',
            title: 'line.size',
            setter: 'NumberSetter',
          },
          {
            name: 'smooth',
            title: 'smooth',
            setter: 'BoolSetter',
          },
          {
            name: 'point.visible',
            title: 'point.visible',
            setter: 'BoolSetter',
          },
          {
            name: 'label.visible',
            title: 'label.visible',
            setter: 'BoolSetter',
          },
        ],
      },
    ].concat(actionConfigure),
  },
};
const snippets: Snippet[] = [
  {
    title: 'Area Chart',
    screenshot:
      'https://img.alicdn.com/imgextra/i2/O1CN012P76ko1dqUbwwmuF8_!!6000000003787-55-tps-56-56.svg',
    schema: {
      componentName: 'AreaChart',
      props: {
        data: [
          { year: '1991', value: 72345678 },
          { year: '1992', value: 4321132 },
          { year: '1993', value: 33121112.5 },
          { year: '1994', value: 45227221 },
          { year: '1995', value: 4321221.9 },
          { year: '1996', value: 6322121 },
          { year: '1997', value: 78312213 },
          { year: '1998', value: 4192312 },
          { year: '1999', value: 6212332 },
          { year: '2000', value: 3192312 },
        ],
        xField: 'year',
        yField: 'value',
        color: '#0079f2',
        label: {
          visible: true,
        },
      },
    },
  },
];

export default {
  ...AreaChartMeta,
  snippets: wrapWithCard(snippets),
};
