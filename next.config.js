const withPlugins = require('next-compose-plugins');
const withAntdLess = require('next-plugin-antd-less');

const pluginAntdLess = withAntdLess({
  lessVarsFilePath: './src/styles/globals.less',
});

module.exports = withPlugins([pluginAntdLess], {
  experimental: {
    reactRoot: true,
    // 严格模式
    reactStrictMode: true,
    // 启用ssr流媒体
    concurrentFeatures: true,
    // 使用服务器组件
    serverComponents: true,
  },
  swcMinify: true,
});