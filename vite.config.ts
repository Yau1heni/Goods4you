import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), svgr()],
    server: {
        host: true,
        port: 3000,
    },
    base: '/Goods4you',

    resolve: {
        alias: [{find: '@', replacement: path.resolve(__dirname, 'src')}],
    },
})
