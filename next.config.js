/** @type {import('next').NextConfig} */
// eslint-disable-next-line
const { withTamagui } = require('@tamagui/next-plugin')
// eslint-disable-next-line
const path = require('path');

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native$': 'react-native-web',
      '@react-native/assets-registry/registry': path.resolve(__dirname, 'lib/react-native-stubs/assets-registry.js'),
    };

    config.resolve.extensions = ['.web.js', '.web.ts', '.web.tsx', ...config.resolve.extensions];

    return config;
  },
  transpilePackages: ['react-native-svg', 'react-native-web'],
};

module.exports = withTamagui({
  config: "./tamagui.config.ts",
  components: ["tamagui"],
  importsWhitelist: ["constants.js", "colors.js"],
  logTimings: true,
  disableExtraction: process.env.NODE_ENV === "development",
  shouldExtract: (path) => {
    if (path.includes("node_modules")) {
      return false;
    }
    return true;
  },
  excludeReactNativeWebExports: [
    "Switch",
    "ProgressBar",
    "Picker",
    "CheckBox",
    "Touchable",
    "TurboModuleRegistry",
    "NativeModules",
    "requireNativeComponent",
    "codegenNativeComponent",
  ],
})(nextConfig);
