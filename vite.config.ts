import replace from '@rollup/plugin-replace'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import UnpluginIcons from 'unplugin-icons/vite'
import { prefetch } from './prefetch-plugin'
const replacePlugin = () => {
    if (process.env.VITE_LOCAL_BUILD === 'true')
        return {
            __DATE__: new Date().toISOString(),
        }
    return {}
}
export default defineConfig({
    plugins: [
        svelte(),
        prefetch(),
        replace({
            preventAssignment: true,
            ...replacePlugin(),
        }),
        UnpluginIcons({ autoInstall: true, compiler: 'svelte' }),
        VitePWA({
            includeAssets: ['icons/*.svg', 'wallpapers/37-[12].jpg'],
        }),
    ],
    resolve: {
        alias: {
            __: new URL('./src/', import.meta.url).pathname,
        },
    },
    build: {
        minify: 'terser',
    },
})
