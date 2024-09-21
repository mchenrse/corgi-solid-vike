import { defineConfig } from 'vite'
import vike from 'vike/plugin'
import vikeSolid from 'vike-solid/vite'

export default defineConfig({
  plugins: [vike({
    prerender: true
  }), vikeSolid()],
})
