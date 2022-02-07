export const rem = (htmlpx: number, px: number): number => {
    return Number((px / htmlpx).toFixed(4));
} 