/* eslint-disable no-unused-expressions */
const discountCalculator = (oldPrice, newPrice) => {
  let result = 0;
  oldPrice ? result = ((oldPrice - newPrice) * 100) / oldPrice : result = 0;
  return result;
};

export default discountCalculator;