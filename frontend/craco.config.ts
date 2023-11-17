import path from "path";

export default {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components/index.ts"),
      "@pages": path.resolve(__dirname, "./src/pages/index.ts"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@utils/functions": path.resolve(
        __dirname,
        "./src/utils/functions/index.ts"
      ),
    },
  },
};
