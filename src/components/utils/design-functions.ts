export const rem = (htmlpx: number, px: number): number => {
    return Number((px / htmlpx).toFixed(4));
} 

export const random = (max: number) => {
    return Math.floor(Math.random() * max);
}