/**
 * Returns the value of the promise that resolves first.
 * @param {Promise} chinaDownload - First download promise.
 * @param {Promise} USDownload - Second download promise.
 * @returns {Promise}
 */
export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]);
}
