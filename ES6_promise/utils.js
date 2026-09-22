/**
 * Simulates a photo upload.
 * @returns {Promise<{status: Number, body: String}>}
 */
export function uploadPhoto() {
  return Promise.resolve({
    status: 200,
    body: 'photo-profile-1',
  });
}

/**
 * Simulates a user creation.
 * @returns {Promise<{firstName: String, lastName: String}>}
 */
export function createUser() {
  return Promise.resolve({
    firstName: 'Guillaume',
    lastName: 'Salva',
  });
}
