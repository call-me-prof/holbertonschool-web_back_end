/**
 * Returns students of a city with their new grade.
 * @param {Array} students - List of student objects.
 * @param {String} city - City to filter by.
 * @param {Array} newGrades - List of {studentId, grade} objects.
 * @returns {Array}
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students)) return [];
  const grades = Array.isArray(newGrades) ? newGrades : [];
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const found = grades.filter((g) => g.studentId === student.id)[0];
      return { ...student, grade: found ? found.grade : 'N/A' };
    });
}
