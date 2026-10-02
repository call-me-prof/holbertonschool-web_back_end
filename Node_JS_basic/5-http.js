const http = require('http');
const fs = require('fs');

// Database file name is passed as a command line argument
const DB_FILE = process.argv[2];

// Read the CSV database and build the students report as a string
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const students = data.split('\n').filter((line) => line.trim() !== '').slice(1);
      const fields = {};
      students.forEach((line) => {
        const parts = line.trim().split(',');
        const field = parts[parts.length - 1];
        if (!fields[field]) fields[field] = [];
        fields[field].push(parts[0]);
      });
      const output = [`Number of students: ${students.length}`];
      Object.keys(fields).forEach((field) => {
        const names = fields[field];
        output.push(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      });
      resolve(output.join('\n'));
    });
  });
}

// HTTP server with two routes: / and /students
const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const header = 'This is the list of our students\n';
    countStudents(DB_FILE)
      .then((report) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`${header}${report}`);
      })
      .catch((error) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`${header}${error.message}`);
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
});

app.listen(1245);

module.exports = app;
