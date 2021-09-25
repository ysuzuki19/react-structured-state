import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';

const entry = 'lib/index.ts';

export default [
  {
    input: entry,
    output: {
      file: 'dist/index.es.js',
      format: 'es',
    },
    external: ['react', 'recoil'],
    plugins: [
      typescript(),
      babel({
        extensions: ['.ts'],
      }),
    ],
  },

  {
    input: entry,
    output: {
      file: 'dist/index.umd.min.js',
      format: 'umd',
      name: 'StructuredState',
      exports: 'named',
      indent: false,
      globals: {
        react: 'react',
        recoil: 'recoil',
      },
    },
    external: ['react', 'recoil'],
    plugins: [
      typescript(),
      babel({
        extensions: ['.ts'],
        exclude: 'node_modules/**',
      }),
      terser(),
    ],
  },
];
