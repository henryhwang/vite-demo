import { defineConfig } from 'vite'
import {vue} from '@vite/plugin-vue'

export default defineConfig({
  plugins: [vue],
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    jsxInject: "import { h, Fragment } from 'vue'",
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly'
    }
  },
  define: {
    '__VUE_OPTIONS_API__': true,
    '__VUE_PROD_DEVTOOLS__': true,
  },
  build: {
    minify: false,
  }
})