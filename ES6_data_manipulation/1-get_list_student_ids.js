/**
 * Returns an array of ids from a list of students.
 * @param {Array} students - List of student objects.
 * @returns {Array<Number>}
 */
export default function getListStudentIds(students) {
  if (!Array.isArray(students)) return [];
  return students.map((student) => student.id);
}
