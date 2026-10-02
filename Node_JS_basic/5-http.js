const http = require('http');
const fs = require('fs');

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

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/students') {
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

app.listen(1245);

module.exports = app;
