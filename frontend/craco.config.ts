import path from "path";
import webpack, { Configuration } from "webpack";

interface CracoConfig {
  webpack?: {
    configure?: (webpackConfig: Configuration) => Configuration;
  };
}

export default {
  webpack: {
    configure: (webpackConfig: Configuration) => {
      webpackConfig.plugins = webpackConfig.plugins || [];

      webpackConfig.plugins.push(
        new webpack.ProvidePlugin({
          process: "process/browser",
        })
      );

      webpackConfig.resolve = {
        ...(webpackConfig.resolve || {}),
        fallback: {
          ...(webpackConfig.resolve?.fallback || {}),
          path: require.resolve("path-browserify"),
          os: require.resolve("os-browserify/browser"),
          crypto: require.resolve("crypto-browserify"),
          stream: require.resolve("stream-browserify"),
          process: require.resolve("process/browser"),
        },
      };

      return webpackConfig;
    },
    alias: {
      "@components": path.resolve(__dirname, "./src/components/index.ts"),
      "@pages": path.resolve(__dirname, "./src/pages/index.ts"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@utils/functions": path.resolve(
        __dirname,
        "./src/utils/functions/index.ts"
      ),
    },
    type: ["node"],
  },
};
