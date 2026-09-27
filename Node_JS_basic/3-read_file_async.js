const fs = require('fs');

/**
 * Reads a CSV database asynchronously and logs students per field.
 * @param {String} path - Path of the database file.
 * @returns {Promise}
 */
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data
        .toString()
        .split('\n')
        .map((line) => line.trim())
        .filter((line) => line !== '');
      const students = lines.slice(1);

      console.log(`Number of students: ${students.length}`);

      const fields = {};
      students.forEach((student) => {
        const parts = student.split(',');
        const firstName = parts[0].trim();
        const field = parts[parts.length - 1].trim();
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstName);
      });

      Object.keys(fields).forEach((field) => {
        const list = fields[field];
        console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
      });

      resolve();
    });
  });
}

module.exports = countStudents;
