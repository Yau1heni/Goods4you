export const calculatePriceWithDiscount = (originalPrice: number, discount: number): string => {
    const discountFraction = discount / 100;
    const priceWithDiscount = originalPrice - originalPrice * discountFraction;

    return priceWithDiscount.toFixed(2)
}