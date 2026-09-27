const http = require('http');
const fs = require('fs').promises;

const hostname = '127.0.0.1';
const port = 1245;

/**
 * Builds the students report from a CSV database.
 * @param {String} path - Path of the database file.
 * @returns {Promise<String>}
 */
function countStudents(path) {
  return fs.readFile(path, 'utf-8')
    .then((data) => {
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1);
      const output = [`Number of students: ${students.length}`];

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
        output.push(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
      });

      return output.join('\n');
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(process.argv[2])
      .then((report) => {
        res.end(`This is the list of our students\n${report}`);
      })
      .catch((error) => {
        res.end(`This is the list of our students\n${error.message}`);
      });
  } else {
    res.end('Hello Holberton School!');
  }
});

app.listen(port, hostname);

module.exports = app;
