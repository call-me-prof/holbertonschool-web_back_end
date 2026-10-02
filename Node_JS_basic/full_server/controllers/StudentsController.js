import readDatabase from '../utils';

// Allowed values for the major parameter
const VALID_MAJORS = ['CS', 'SWE'];

// Controller for the students routes
class StudentsController {
  // List all students grouped by field (fields sorted alphabetically)
  static getAllStudents(request, response) {
    const dbPath = process.argv.length > 2 ? process.argv[2] : '';
    readDatabase(dbPath)
      .then((fields) => {
        const output = ['This is the list of our students'];
        const sortedFields = Object.keys(fields).sort(
          (a, b) => a.toLowerCase().localeCompare(b.toLowerCase()),
        );
        sortedFields.forEach((field) => {
          const names = fields[field];
          output.push(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
        });
        response.status(200).send(output.join('\n'));
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  // List the students of a single major (CS or SWE)
  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (!VALID_MAJORS.includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    const dbPath = process.argv.length > 2 ? process.argv[2] : '';
    readDatabase(dbPath)
      .then((fields) => {
        const names = fields[major] || [];
        response.status(200).send(`List: ${names.join(', ')}`);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;
