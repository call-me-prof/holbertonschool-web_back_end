import readDatabase from '../utils';

/**
 * Controller handling the students routes.
 */
export default class StudentsController {
  /**
   * Sends the list of all students grouped by field.
   * @param {Object} request - Express request.
   * @param {Object} response - Express response.
   */
  static getAllStudents(request, response) {
    readDatabase(process.argv[2])
      .then((fields) => {
        const lines = ['This is the list of our students'];
        const names = Object.keys(fields).sort(
          (a, b) => a.toLowerCase().localeCompare(b.toLowerCase()),
        );

        names.forEach((field) => {
          const list = fields[field];
          const total = list.length;
          lines.push(`Number of students in ${field}: ${total}. List: ${list.join(', ')}`);
        });

        response.status(200).send(lines.join('\n'));
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  /**
   * Sends the list of students for a given major.
   * @param {Object} request - Express request.
   * @param {Object} response - Express response.
   */
  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(process.argv[2])
      .then((fields) => {
        const list = fields[major] || [];
        response.status(200).send(`List: ${list.join(', ')}`);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}
