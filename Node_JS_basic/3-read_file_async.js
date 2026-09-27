const fs = require('fs').promises;

/**
 * Reads a CSV database asynchronously and logs students per field.
 * @param {String} path - Path of the database file.
 * @returns {Promise}
 */
function countStudents(path) {
  return fs.readFile(path, 'utf-8')
    .then((data) => {
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1);
      console.log(`Number of students: ${students.length}`);

      const fields = {};
      students.forEach((student) => {
        const parts = student.split(',');
        const firstName = parts[0];
        const field = parts[parts.length - 1];
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstName);
      });

      Object.keys(fields).forEach((field) => {
        const list = fields[field];
        console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
      });
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;
