import {defineConfig} from 'vite'
import {resolve} from 'path'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import {pigment} from "@pigment-css/vite-plugin";
import {libInjectCss} from 'vite-plugin-lib-inject-css'


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        pigment({}),
        react(),
        dts({
            include: ['lib'],
            outDir: 'dist',
            rollupTypes: true,
            tsconfigPath: "./tsconfig.build.json",
        }),
        libInjectCss(),
    ],
    build: {
        copyPublicDir: false,
        outDir: 'dist',
        sourcemap: true,
        lib: {
            name: "mss",
            entry: resolve(__dirname, 'lib/main.ts')
        },
        rollupOptions: {
            input: "lib/main.ts",
            output: [
                {
                    format: "esm",
                    assetFileNames: 'assets/[name][extname]',
                    entryFileNames: '[name].esm.js',
                },
            ],
            external: ['react', 'react/jsx-runtime'],
        }
    }
});
