import { ComponentMetadata, Snippet } from '@ali/lowcode-types';
import { operations } from '../common';
import props from './common/props';

const PageHeaderMeta: ComponentMetadata = {
  componentName: 'PageHeader',
  category: 'Layout',
  group: 'Featured',
  title: 'Header',
  docUrl: '',
  icon: 'https://img.alicdn.com/imgextra/i2/O1CN01q3ZRHx24rrQ9ysyU8_!!6000000007445-55-tps-56-56.svg',
  devMode: 'procode',
  npm: {
    package: '@dslc/fusion-ui',
    version: '1.0.0',
    exportName: 'PageHeader',
    main: 'lib/index.js',
    destructuring: true,
    subName: '',
  },
  props: [
    {
      name: 'backIcon',
      propType: 'node',
    },
    {
      name: 'prefixCls',
      propType: 'string',
    },
    {
      name: 'title',
      propType: 'node',
    },
    {
      name: 'subTitle',
      propType: 'node',
    },
    {
      name: 'style',
      propType: 'object',
    },
    {
      name: 'breadcrumb',
      propType: {
        type: 'oneOfType',
        value: ['object'],
      },
    },
    {
      name: 'breadcrumbRender',
      propType: {
        type: 'func',
        params: [
          {
            name: 'props',
            propType: {
              type: 'shape',
              value: [
                {
                  name: 'backIcon',
                  propType: 'node',
                },
                {
                  name: 'prefixCls',
                  propType: 'string',
                },
                {
                  name: 'title',
                  propType: 'node',
                },
                {
                  name: 'subTitle',
                  propType: 'node',
                },
                {
                  name: 'style',
                  propType: 'object',
                },
                {
                  name: 'breadcrumb',
                  propType: {
                    type: 'oneOfType',
                    value: ['object'],
                  },
                },
                {
                  name: 'breadcrumbRender',
                  propType: 'object',
                },
                {
                  name: 'tags',
                  propType: {
                    type: 'oneOfType',
                    value: [
                      'object',
                      {
                        type: 'arrayOf',
                        value: 'object',
                      },
                    ],
                  },
                },
                {
                  name: 'footer',
                  propType: 'node',
                },
                {
                  name: 'extra',
                  propType: 'node',
                },
                {
                  name: 'avatar',
                  propType: 'object',
                },
                {
                  name: 'onBack',
                  propType: {
                    type: 'func',
                    params: [
                      {
                        name: 'e',
                        propType: 'object',
                      },
                    ],
                    raw: '(e?: MouseEvent<HTMLDivElement, MouseEvent>) => void',
                  },
                },
                {
                  name: 'className',
                  propType: 'string',
                },
                {
                  name: 'ghost',
                  propType: 'bool',
                },
              ],
            },
          },
          {
            name: 'defaultDom',
            propType: 'node',
          },
        ],
        raw: '(props: PageHeaderProps, defaultDom: ReactNode) => ReactNode',
      },
    },
    {
      name: 'tags',
      propType: {
        type: 'oneOfType',
        value: [
          'object',
          {
            type: 'arrayOf',
            value: 'object',
          },
        ],
      },
    },
    {
      name: 'footer',
      propType: 'node',
    },
    {
      name: 'extra',
      propType: 'node',
    },
    {
      name: 'avatar',
      propType: 'object',
    },
    {
      name: 'onBack',
      propType: {
        type: 'func',
        params: [
          {
            name: 'e',
            propType: 'object',
          },
        ],
        raw: '(e?: MouseEvent<HTMLDivElement, MouseEvent>) => void',
      },
    },
    {
      name: 'className',
      propType: 'string',
    },
    {
      name: 'ghost',
      propType: 'bool',
    },
  ],
  configure: {
    component: {
      isContainer: false,
    },
    props: [
      ...props,
      Object.assign({}, operations, {
        condition: (target) => {
          const showAction = target.getProps().getPropValue('showActions');
          return !!showAction;
        },
      }),
    ],
  },
};

const snippets: Snippet[] = [
  {
    title: 'Header',
    screenshot:
      'https://img.alicdn.com/imgextra/i2/O1CN01q3ZRHx24rrQ9ysyU8_!!6000000007445-55-tps-56-56.svg',
    schema: {
      componentName: 'PageHeader',
      title: 'Header',
      props: {
        title: 'This is a designer title',
        subTitle: 'and this is the subtitle',
        breadcrumb: ['front page', 'the list'],
        operations: [
          {
            content: 'custom',
            action: 'custom',
            type: 'secondary',
          },
          {
            content: 'custom',
            action: 'custom',
            type: 'secondary',
          },
        ],
      },
    },
  },
];

export default {
  ...PageHeaderMeta,
  snippets,
};
