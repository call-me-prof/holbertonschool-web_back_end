const fs = require('fs');

// Read the CSV database asynchronously and log students per field
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
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
      resolve();
    });
  });
}

module.exports = countStudents;
