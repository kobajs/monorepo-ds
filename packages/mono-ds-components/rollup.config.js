import babel from "rollup-plugin-babel";

const formats = ["cjs", "esm"];
const plugins = [babel({ exclude: "node_modules/**" })];

export default [
  {
    input: "src/index.js",
    plugins,
    output: formats.map(format => ({
      file: `dist/index.${format}.js`,
      format,
    })),
  },
];