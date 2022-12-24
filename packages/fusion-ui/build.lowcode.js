const { library } = require('./build.json');
const { version, name } = require('./package.json');

module.exports = {
  sourceMap: false,
  alias: {
    '@': './src',
    '@dslc/fusion-ui': './src',
  },
  plugins: [
    [
      '@alifd/build-plugin-lowcode',
      {
        noParse: true,
        renderUrls: [
          `https://unpkg.com/${name}@${version}/dist/${library}.js`,
          `https://unpkg.com/${name}@${version}/dist/${library}.css`,
        ],
        baseUrl: {
          prod: `https://unpkg.com/${name}@${version}`,
          daily: `https://unpkg.com/${name}@${version}`,
        },
        engineScope: '@alilc',
        builtinAssets: [
          {
            packages: [
              {
                package: 'moment',
                version: '2.24.0',
                urls: ['https://g.alicdn.com/mylib/moment/2.24.0/min/moment.min.js'],
                library: 'moment',
              },
              {
                package: 'lodash',
                library: '_',
                urls: ['https://g.alicdn.com/platform/c/lodash/4.6.1/lodash.min.js'],
              },
              {
                package: 'iconfont-icons',
                urls: 'https://at.alicdn.com/t/font_2369445_ukrtsovd92r.js',
              },
              {
                package: '@ant-design/icons',
                version: '4.7.0',
                urls: [`https://g.alicdn.com/code/npm/@ali/ant-design-icons-cdn/4.5.0/index.umd.min.js`],
                library: 'icons',
              },
              {
                package: 'antd',
                version: '4.23.0',
                urls: [
                  `https://g.alicdn.com/code/lib/antd/4.23.0/antd.min.js`,
                  `https://g.alicdn.com/code/lib/antd/4.23.0/antd.min.css`,
                ],
                library: 'antd',
              },{
                "title": "fusion组件库",
                "package": "@alifd/next",
                "version": "1.26.4",
                "urls": [
                  "https://g.alicdn.com/code/lib/alifd__next/1.26.4/next.min.css",
                  "https://g.alicdn.com/code/lib/alifd__next/1.26.4/next-with-locales.min.js"
                ],
                "library": "Next"
              },
              {
                "title": "NextTable",
                "package": "NextTable",
                "version": "1.0.1",
                "urls": [
                  "https://g.alicdn.com/fusion-platform/pro-table/1.0.1/next-table.js",
                  "https://g.alicdn.com/fusion-platform/pro-table/1.0.1/next-table.css"
                ],
                "library": "NextTable"
              },
              {
                "title": "AliLowCodeComponents",
                "package": "@alifd/ali-lowcode-components",
                "version": "latest",
                "urls": [
                  "https://gw.alipayobjects.com/os/lib/alifd/ali-lowcode-components/0.1.4/dist/ali-lowcode-components.js",
                  "https://gw.alipayobjects.com/os/lib/alifd/ali-lowcode-components/0.1.4/dist/ali-lowcode-components.css"
                ],
                "library": "AliLowCodeComponents"
              },
              {
                "title": "BizCharts",
                "package": "bizcharts",
                "version": "4.1.11",
                "urls": ["https://g.alicdn.com/code/lib/bizcharts/4.1.11/BizCharts.min.js"],
                "library": "BizCharts"
              }
            ],
            components: [],
          },
        ],
        categories: ['Universal', 'Navigation', 'Input', 'Display', 'Feedback'],
      },
    ],
    [
      'build-plugin-fusion',
      {
        uniteBaseComponent: '@alifd/next',
        cssVariable: true,
        importOptions: {
          libraryDirectory: 'lib',
        },
      },
    ],
  ],
};
