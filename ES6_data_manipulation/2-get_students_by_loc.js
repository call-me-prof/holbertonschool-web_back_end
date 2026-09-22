/**
 * Returns students located in a specific city.
 * @param {Array} students - List of student objects.
 * @param {String} city - City to filter by.
 * @returns {Array}
 */
export default function getStudentsByLocation(students, city) {
  if (!Array.isArray(students)) return [];
  return students.filter((student) => student.location === city);
}
