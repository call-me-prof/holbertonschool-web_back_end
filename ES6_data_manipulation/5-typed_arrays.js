/**
 * Creates an ArrayBuffer with an Int8 value at a given position.
 * @param {Number} length - Buffer length in bytes.
 * @param {Number} position - Index where the value is set.
 * @param {Number} value - Int8 value to store.
 * @returns {DataView}
 */
export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer, 0, length);
  view.setInt8(position, value);
  return view;
}
