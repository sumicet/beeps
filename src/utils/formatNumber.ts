export const formatNumber = (number: number, options?: Intl.NumberFormatOptions | undefined) =>
    new Intl.NumberFormat('en-US', options).format(number);
