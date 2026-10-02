import fs from 'fs';

// Read the database asynchronously and return first names grouped by field
const readDatabase = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      reject(err);
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
    resolve(fields);
  });
});

export default readDatabase;
