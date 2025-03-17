export interface Props {
    src: string;
    width?: number;
    height?: number;
    draggable?: boolean;
    initialPosition?: {
        x: number;
        y: number;
    };
}
declare const _default: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    positionChange: (position: {
        x: number;
        y: number;
    }) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
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
}, HTMLDivElement>;
export default _default;
