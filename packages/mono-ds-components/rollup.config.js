import babel from "rollup-plugin-babel";

const plugins = [babel({ exclude: "node_modules/**" })];

export default [
  {
    input: "src/index.js",
    plugins,
    output: {
      file: `dist/index.js`,
      format: 'esm',
    },
  },
];