import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import dts from 'rollup-plugin-dts';

export default [
  {
    input: 'src/index.ts',
    output: [
      { file: 'dist/index.mjs', format: 'es' }, // Для современных проектов
      { file: 'dist/index.js', format: 'cjs' }  // Для старых Node.js проектов
    ],
    plugins: [typescript(), terser()] // Сжимаем код для экономии места
  },
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }], // Файл с подсказками типов
    plugins: [dts()]
  }
];