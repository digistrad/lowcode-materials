import { ComponentMetadata } from '@ali/lowcode-types';
import { actionConfigure } from '../common/chart-action';
import { wrapWithCard } from '../pro-card/meta';

const pieChartMeta: ComponentMetadata = {
  componentName: 'PieChart',
  title: 'Pie Chart',
  category: 'Chart',
  group: 'Featured',
  docUrl: '',
  screenshot: '',
  devMode: 'procode',
  npm: {
    package: '@dslc/fusion-ui',
    version: '0.1.3-beta.3',
    exportName: 'PieChart',
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
      // 图例
      {
        name: 'legend',
        type: 'group',
        display: 'accordion',
        title: {
          label: 'Legend',
        },
        items: [
          {
            name: 'legend.position',
            title: 'legend.position',
            setter: {
              componentName: 'SelectSetter',
              props: {
                options: [
                  { title: 'left', value: 'left' },
                  { title: 'left-top', value: 'left-top' },
                  { title: 'left-bottom', value: 'left-bottom' },
                  { title: 'right', value: 'right' },
                  { title: 'right-top', value: 'right-top' },
                  { title: 'right-bottom', value: 'right-bottom' },
                  { title: 'top', value: 'top' },
                  { title: 'top-left', value: 'top-left' },
                  { title: 'top-right', value: 'top-right' },
                  { title: 'bottom', value: 'bottom' },
                  { title: 'bottom-left', value: 'bottom-left' },
                  { title: 'bottom-right', value: 'bottom-right' },
                ],
              },
            },
          },
        ],
      },
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
            name: 'angleField',
            title: {
              label: 'angleField',
              tip: 'The data field name corresponding to the fan slice size (radian)',
            },
            setter: 'StringSetter',
          },
          {
            name: 'colorField',
            title: {
              label: 'colorField',
              tip: 'The data field name corresponding to the sector color map',
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
            setter: {
              componentName: 'ArraySetter',
              props: {
                itemSetter: {
                  componentName: 'ColorSetter',
                  initialValue: '#0079f2',
                },
              },
            },
          },
          {
            name: 'label',
            type: 'group',
            display: 'accordion',
            title: {
              label: 'Label',
            },
            items: [
              {
                name: 'label.visible',
                title: 'label.visible',
                setter: 'BoolSetter',
              },
              {
                name: 'label.type',
                title: 'label.type',
                setter: {
                  componentName: 'SelectSetter',
                  props: {
                    options: [
                      { title: 'inner', value: 'inner' },
                      { title: 'outer', value: 'outer' },
                      { title: 'outer-center', value: 'outer-center' },
                      { title: 'spider', value: 'spider' },
                    ],
                  },
                },
              },
            ],
          },
        ],
      },
    ].concat(actionConfigure),
  },
};

const snippets = [
  {
    title: 'Pie Chart',
    name: 'PieChart',
    screenshot:
      'https://img.alicdn.com/imgextra/i4/O1CN018rBRGK24fx7hzkITN_!!6000000007419-55-tps-56-56.svg',
    schema: {
      componentName: 'PieChart',
      title: 'Pie Chart',
      props: {
        legend: {
          position: 'top-left',
        },
        data: [
          { year: '1991', value: 72345678 },
          { year: '1992', value: 4321132 },
          { year: '1993', value: 33121112.5 },
          { year: '1994', value: 45227221 },
          { year: '1995', value: 4321221.9 },
          { year: '1996', value: 6322121 },
          { year: '1997', value: 78312213 },
          { year: '1998', value: 2192312 },
          { year: '1999', value: 6212332 },
          { year: '2000', value: 1192312 },
        ],
        angleField: 'value',
        colorField: 'year',
        label: {
          visible: true,
          type: 'spider',
        },
        color: ['#3BCBD1', '#47A4FE', '#EDBA42', '#F4704E', '#ED6899', '#7F62C3', '#6E7BC9'],
      },
    },
  },
];
export default {
  ...pieChartMeta,
  snippets: wrapWithCard(snippets),
};
