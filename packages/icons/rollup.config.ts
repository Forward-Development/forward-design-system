import typescript from '@rollup/plugin-typescript';
import url from '@rollup/plugin-url';
import svgr from '@svgr/rollup';
import { defineConfig } from 'rollup';
import copy from 'rollup-plugin-copy';
import postcss from 'rollup-plugin-postcss';

export default defineConfig({
  input: './index.ts',
  output: [
    {
      dir: 'dist',
      format: 'commonjs',
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: '.',
    },
  ],
  plugins: [
    url({ destDir: 'dist/assets' }),
    svgr({ icon: true }),
    typescript({
      declaration: true,
      declarationDir: 'dist',
      rootDir: '.',
    }),
    postcss({
      extract: false,
      modules: true,
      use: ['sass'],
    }),
    copy({
      targets: [
        { src: 'package.json', dest: 'dist' },
        // Workaround for 'Can't resolve style-inject
        {
          src: '../../node_modules/style-inject',
          dest: 'dist/node_modules/style-inject',
        },
      ],
    }),
  ],
});
