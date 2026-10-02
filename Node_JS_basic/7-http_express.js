const express = require('express');
const fs = require('fs');

const app = express();

/**
 * Builds the students report from a CSV database.
 * @param {String} path - Path of the database file.
 * @returns {Promise<String>}
 */
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1);
      const output = [`Number of students: ${students.length}`];

      const fields = {};
      students.forEach((student) => {
        const parts = student.split(',');
        const [firstName] = parts;
        const field = parts[parts.length - 1].trim();
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstName.trim());
      });

      Object.keys(fields).forEach((field) => {
        const list = fields[field];
        const total = list.length;
        output.push(`Number of students in ${field}: ${total}. List: ${list.join(', ')}`);
      });

      resolve(output.join('\n'));
    });
  });
}

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.set('Content-Type', 'text/plain');
  countStudents(process.argv[2])
    .then((report) => {
      res.send(`This is the list of our students\n${report}`);
    })
    .catch((error) => {
      res.send(`This is the list of our students\n${error.message}`);
    });
});

app.listen(1245);

module.exports = app;
