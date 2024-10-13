/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import path from "path";

export default defineConfig({
    test: {
        globals: true,
        environment: 'jsdom'
    },
    resolve: {
        alias: [{find: '@', replacement: path.resolve(__dirname, 'src')}],
    },
})