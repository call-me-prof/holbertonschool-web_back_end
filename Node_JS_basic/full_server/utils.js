import fs from 'fs';

/**
 * Reads the students database asynchronously.
 * @param {String} filePath - Path of the database file.
 * @returns {Promise<Object>} Arrays of first names grouped by field.
 */
export default function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (error, data) => {
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
      const fields = {};

      students.forEach((student) => {
        const parts = student.split(',');
        const firstName = parts[0].trim();
        const field = parts[parts.length - 1].trim();
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstName);
      });

      resolve(fields);
    });
  });
}
