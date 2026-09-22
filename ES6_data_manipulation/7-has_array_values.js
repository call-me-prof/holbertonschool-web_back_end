/**
 * Checks if all elements of an array exist in a set.
 * @param {Set} set - Set to search in.
 * @param {Array} array - Values to look for.
 * @returns {Boolean}
 */
export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
