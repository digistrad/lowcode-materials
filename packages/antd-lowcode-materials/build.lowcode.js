const { name, version } = require("./package.json");

const library = 'AntdLowcode';

module.exports = {
  sourceMap: false,
  alias: {
    '@': './src',
    lowcode: './lowcode'
  },
  plugins: [
    [
      '@alifd/build-plugin-lowcode',
      {
        noParse: false,
        engineScope: '@alilc',
        library,
        npmInfo: {
          package: name,
          version,
        },
        lowcodeDir: 'lowcode',
        entryPath: 'src/index.tsx',
        categories: ['Universal', 'Navigation', 'Input', 'Display', 'Feedback'],
        baseUrl: {
          prod: `https://unpkg.com/${name}@${version}`,
          daily: `https://unpkg.com${name}@${version}`,
        },
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
            ],
            components: [],
          },
        ],
      },
    ],
  ],
};
