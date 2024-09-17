import type {ExtendTheme} from "@pigment-css/react/theme";

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
    namespace React {
        interface HTMLAttributes<T> {
            sx?:
                | React.CSSProperties
                | ((theme: ThemeTokens) => React.CSSProperties)
                | ReadonlyArray<React.CSSProperties | ((theme: ThemeTokens) => React.CSSProperties)>;
        }
    }
}
