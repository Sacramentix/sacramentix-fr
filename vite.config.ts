import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import { presetUno, presetAttributify } from 'unocss'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      presets: [
        presetAttributify({ /* preset options */}),
        presetUno(),
      ]
    }),
    Icons({
      compiler: 'vue3',
      autoInstall: true
    }),
    Components({
      dts: true,
      resolvers: [
        IconsResolver({
          prefix: "icon"
        }),
      ],
    }),
  ]
})
