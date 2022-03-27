import typescript from '@rollup/plugin-typescript'
import vue from 'rollup-plugin-vue'

export default [
  {
    input: 'src/index.ts',
    output: {
      format: 'esm',
      file: 'dist/ssr.esm.js',
      sourcemap: true
    },
    external: ['vue', 'vuetify/lib'],
    plugins: [typescript(), vue({ template: { optimizeSSR: true } })]
  }
]
