const path = require('path');
const css = require('rollup-plugin-postcss');
const resolve = require('@rollup/plugin-node-resolve').default;
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('rollup-plugin-typescript2');
const json = require('@rollup/plugin-json');

module.exports = {
  input: 'src/index.tsx',
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  external: ['react', 'react-dom'],
  plugins: [
    resolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
    commonjs(),
    css({
      modules: true,
      inject: true,
    }),
    typescript({
      tsconfig: path.resolve(__dirname, 'tsconfig.json'),
    }),
    json()
  ],
};
