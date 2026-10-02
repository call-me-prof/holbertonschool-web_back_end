const fs = require('fs');

// Read the CSV database synchronously and log students per field
function countStudents(path) {
  let data;
  try {
    data = fs.readFileSync(path, 'utf8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  // Ignore empty lines and the header line
  const students = data.split('\n').filter((line) => line.trim() !== '').slice(1);
  console.log(`Number of students: ${students.length}`);

  // Group first names by field
  const fields = {};
  students.forEach((line) => {
    const parts = line.trim().split(',');
    const field = parts[parts.length - 1];
    if (!fields[field]) fields[field] = [];
    fields[field].push(parts[0]);
  });

  Object.keys(fields).forEach((field) => {
    const names = fields[field];
    console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
  });
}

module.exports = countStudents;
