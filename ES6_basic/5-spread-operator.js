// Spread syntax merges both arrays and every character of the string
export default function concatArrays(array1, array2, string) {
  return [...array1, ...array2, ...string];
}
