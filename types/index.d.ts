export declare const CoverImageAdjuster: import('./utils/interface').SFCWithInstall<import('vue').DefineComponent<import('./components/CoverImageAdjuster/index.vue').Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    positionChange: (position: {
        x: number;
        y: number;
    }) => any;
}, string, import('vue').PublicProps, Readonly<import('./components/CoverImageAdjuster/index.vue').Props> & Readonly<{
    onPositionChange?: ((position: {
        x: number;
        y: number;
    }) => any) | undefined;
}>, {
    width: number;
    height: number;
    draggable: boolean;
    initialPosition: {
        x: number;
        y: number;
    };
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    containerRef: HTMLDivElement;
    imgRef: HTMLImageElement;
}, HTMLDivElement>> & Record<string, any>;
export default CoverImageAdjuster;
