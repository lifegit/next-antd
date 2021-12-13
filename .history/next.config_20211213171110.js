/*
 * @Author: your name
 * @Date: 2021-10-25 17:23:51
 * @LastEditTime: 2021-12-13 17:11:10
 * @LastEditors: Timeout
 * @Description: In User Settings Edit
 * @FilePath: /next-demo/next.config.js
 */

// /** @type {import('next').NextConfig} */
// module.exports = {
//   reactStrictMode: true,
// }

// next.config.js
const withPlugins = require('next-compose-plugins');
const withAntdLess = require('next-plugin-antd-less');

const pluginAntdLess = withAntdLess({
  // modifyVars: {
  //   '@THEME--DARK': 'theme-dark',
  // },
   modules: {
     getLocalIdent: (_context, _localIdentName, localName) => localName,
  },
  lessVarsFilePath: '/styles/antd.less',
  lessLoaderOptions: {
      // javascriptEnabled: true,
  },
  // cssLoaderOptions: {
  //   javascriptEnabled: true,
  //   esModule: false,
  //   sourceMap: false,
  //   modules: {
  //     mode: 'local',
  //   },
  // },
});
module.exports = withPlugins([[pluginAntdLess]], {
  webpack(config) {
    return config;
  },
  experimental: {
    // 启用ssr流媒体
    concurrentFeatures: true,
    // 使用服务器组件
    serverComponents: true,
  },
  swcMinify: true,
  // images: {
  //   disableStaticImages: true,
  // },
  // NextFuture
  // future: {
  //   webpack5: true,
  // },
});