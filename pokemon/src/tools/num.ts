export function format(num: number, size: number): string {
    const missing = size - num.toString().length
    return (missing > 0) ? "0".repeat(missing) + num : num.toString();
}

export function getRandomNum(max: number): number {
    return Math.floor((Math.random() * max) + 1);
}