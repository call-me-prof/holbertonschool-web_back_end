/**
 * Returns a resolved promise with the user names.
 * @param {String} firstName - User first name.
 * @param {String} lastName - User last name.
 * @returns {Promise<{firstName: String, lastName: String}>}
 */
export default function signUpUser(firstName, lastName) {
  return Promise.resolve({ firstName, lastName });
}
