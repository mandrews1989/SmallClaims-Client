import DRFAdapter from './drf';
import config from '../config/environment';
import allPresent from '../utils/all-present';

// Higher order functions FTW
const AUTH_ENDPOINT = route => () => `${config.APP.API_HOST}/api/auth/${route}/`;

export default DRFAdapter.extend({
  urlForCreateRecord(modelName, snapshot) {
    let url = AUTH_ENDPOINT('register')(),
        {socialBackend, socialToken} = snapshot.attributes();

    // Two hacks must make a right, right?
    if (allPresent(socialBackend, socialToken)) {
      url += url.indexOf('?') > -1 ? '&' : '?';
      url += `backend=${encodeURIComponent(socialBackend)}&token=${encodeURIComponent(socialToken)}`;
    }
    return url;
  },

  urlForFindRecord: AUTH_ENDPOINT('me'),
  urlForUpdateRecord: AUTH_ENDPOINT('me'),

  createRecord() {
    return this._super(...arguments).then(response => {
      let { auth_token } = response,
          session = this.container.lookup('service:session');

      // Don't do the default sessionAuthenticationSucceeded transition
      session.set('noTransition', true);
      return session.authenticate('authenticator:token-prepop', { auth_token }).then(() => response);
    });
  },
});
