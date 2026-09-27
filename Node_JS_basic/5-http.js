const http = require('http');
const fs = require('fs');

const port = 1245;

/**
 * Builds the students report from a CSV database.
 * @param {String} path - Path of the database file.
 * @returns {Promise<String>}
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
      const output = [`Number of students: ${students.length}`];

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
        output.push(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
      });

      resolve(output.join('\n'));
    });
  });
}

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2])
      .then((report) => {
        res.end(report);
      })
      .catch((error) => {
        res.end(error.message);
      });
  } else {
    res.end('Hello Holberton School!');
  }
});

app.listen(port);

module.exports = app;
