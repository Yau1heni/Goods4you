export const calculatePriceWithDiscount = (originalPrice: number, discount: number): string => {
  const discountFraction = discount / 100;
  const priceWithDiscount = originalPrice - originalPrice * discountFraction;

  return roundToTwoDecimals(priceWithDiscount);
};

export const roundToTwoDecimals = (value: number) => value.toFixed(2);
