import { uploadPhoto, createUser } from './utils';

/**
 * Resolves all signup promises and logs the profile data.
 * @returns {Promise}
 */
export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([photo, user]) => {
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
