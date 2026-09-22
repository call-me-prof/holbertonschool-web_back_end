/**
 * Updates every item with quantity 1 to quantity 100.
 * @param {Map} map - Map of groceries.
 * @returns {Map}
 */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  map.forEach((value, key) => {
    if (value === 1) map.set(key, 100);
  });
  return map;
}
