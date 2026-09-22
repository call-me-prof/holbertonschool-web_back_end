/**
 * Returns a Promise that resolves or rejects based on success.
 * @param {Boolean} success - Whether the fake API call succeeds.
 * @returns {Promise}
 */
export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
