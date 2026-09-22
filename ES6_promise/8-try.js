/**
 * Divides numerator by denominator.
 * @param {Number} numerator - The dividend.
 * @param {Number} denominator - The divisor.
 * @returns {Number}
 */
export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('cannot divide by 0');
  }
  return numerator / denominator;
}
