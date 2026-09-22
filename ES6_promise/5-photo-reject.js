/**
 * Returns a promise rejecting with an Error for the given file.
 * @param {String} filename - Name of the file.
 * @returns {Promise}
 */
export default function uploadPhoto(filename) {
  return Promise.reject(new Error(`${filename} cannot be processed`));
}
