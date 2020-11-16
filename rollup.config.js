import vue from 'rollup-plugin-vue'
import css from 'rollup-plugin-css-only'
import stylus  from 'rollup-plugin-stylus-compiler';
import copy from 'rollup-plugin-copy'

export default {
  input: 'src/index.js',
  external: ['vue'],
  output: {
    file: 'dist/index.js',
    format: 'esm',
      globals: {
        vue: 'vue'
      }
  },
  plugins: [
    stylus(),
    css(),
    vue(),
    copy({
      targets: [
        { src: 'src/assets/fonts/icons/*', dest: 'dist/fonts/icons' }
      ]
    })
  ]
}