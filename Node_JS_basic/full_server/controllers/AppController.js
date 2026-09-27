/**
 * Controller handling the homepage route.
 */
export default class AppController {
  /**
   * Sends the welcome message.
   * @param {Object} request - Express request.
   * @param {Object} response - Express response.
   */
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}
