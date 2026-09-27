const fs = require('fs');

/**
 * Reads a CSV database synchronously and logs students per field.
 * @param {String} path - Path of the database file.
 */
function countStudents(path) {
  let data;

  try {
    data = fs.readFileSync(path, 'utf8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  const lines = data.toString().split('\n').filter((line) => line.trim() !== '');
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
}

module.exports = countStudents;
