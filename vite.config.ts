import {defineConfig} from 'vite'
import {extname, relative, resolve} from 'path'
import {fileURLToPath} from 'node:url'
import {glob} from 'glob'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import {pigment, extendTheme} from "@pigment-css/vite-plugin";
import type { ExtendTheme } from '@pigment-css/react/theme';
import {libInjectCss} from 'vite-plugin-lib-inject-css'


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        pigment({theme: extendTheme({
                bgColor: "#f09",
                fontColor: "#000",
                borderColor: "#cdcdcd"
            })}),
        react(),
        libInjectCss(),
        dts({include: ['lib'], rollupTypes: true, tsconfigPath: "./tsconfig.build.json"})
    ],
    build: {
        copyPublicDir: false,
        lib: {
            entry: resolve(__dirname, 'lib/main.ts'),
            formats: ['es'],
        },
        rollupOptions: {
            external: ['react', 'react/jsx-runtime'],
            input: Object.fromEntries(
                glob.sync('lib/**/*.{ts,tsx}', {
                    ignore: ["lib/**/*.d.ts"],
                }).map(file => [
                    // The name of the entry point
                    // lib/nested/foo.ts becomes nested/foo
                    relative(
                        'lib',
                        file.slice(0, file.length - extname(file).length)
                    ),
                    // The absolute path to the entry file
                    // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
                    fileURLToPath(new URL(file, import.meta.url))
                ])
            ),
            output: {
                assetFileNames: 'assets/[name][extname]',
                entryFileNames: '[name].js',
            }
        }
    }
})

interface ThemeTokens {
    bgColor: string;
    fontColor: string;
    borderColor: string;
}

declare module '@pigment-css/react/theme' {
    interface ThemeArgs {
        theme: ExtendTheme<{
            colorScheme: 'light' | 'dark';
            tokens: ThemeTokens;
        }>;
    }
}

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace React {
        interface HTMLAttributes<T> {
            sx?:
                | React.CSSProperties
                | ((theme: ThemeTokens) => React.CSSProperties)
                | ReadonlyArray<React.CSSProperties | ((theme: ThemeTokens) => React.CSSProperties)>;
        }
    }
}
