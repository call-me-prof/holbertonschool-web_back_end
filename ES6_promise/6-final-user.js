import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

/**
 * Calls signup and upload functions and returns their settled results.
 * @param {String} firstName - User first name.
 * @param {String} lastName - User last name.
 * @param {String} fileName - Photo file name.
 * @returns {Promise<Array<{status: String, value: *}>>}
 */
export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((results) => results.map((result) => ({
    status: result.status,
    value: result.status === 'fulfilled' ? result.value : String(result.reason),
  })));
}
