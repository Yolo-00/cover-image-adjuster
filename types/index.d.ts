declare module 'cover-image-adjuster' {
    import { DefineComponent } from 'vue'

    export interface CoverImageAdjusterProps {
        src: string;
        width?: number;
        height?: number;
        draggable?: boolean;
        initialPosition?: {
            x: number;
            y: number;
        };
    }

    export const CoverImageAdjuster: DefineComponent<CoverImageAdjusterProps>
}