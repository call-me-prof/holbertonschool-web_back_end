/**
 * Joins the rest of set values starting with startString using '-'.
 * @param {Set} set - Set of values.
 * @param {String} startString - Prefix to match.
 * @returns {String}
 */
export default function cleanSet(set, startString) {
  if (!(set instanceof Set) || typeof startString !== 'string') return '';
  if (startString.length === 0) return '';
  const parts = [];
  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const rest = value.substring(startString.length);
      if (rest && rest !== value) parts.push(rest);
    }
  }
  return parts.join('-');
}
