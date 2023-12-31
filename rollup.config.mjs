import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { babel } from '@rollup/plugin-babel';

// This is required to read package.json file when
// using Native ES modules in Node.js
// https://rollupjs.org/command-line-interface/#importing-package-json
import { createRequire } from 'node:module';
const requireFile = createRequire(import.meta.url);
const packageJson = requireFile('./package.json');

export default [
  {
    input: 'src/index.ts', // Cambiado a .ts
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        exports: 'named',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve({
        extensions: ['.ts', '.tsx', '.js', '.jsx'], // Agregado soporte para .ts y .tsx
      }),
      commonjs(),
      typescript(), // Agregado plugin de TypeScript
      terser(),
      babel({
        extensions: ['.ts', '.tsx', '.js', '.jsx'], // Agregado soporte para .ts y .tsx
        exclude: 'node_modules/**',
      }),
    ],
    external: ['react', 'react-dom', '@emotion/react', '@emotion/styled'],
  },
];