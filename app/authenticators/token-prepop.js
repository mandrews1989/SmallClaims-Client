import TokenAuthenticator from 'ember-simple-auth-token/authenticators/token';
import Ember from 'ember';

const {resolve} = Ember.RSVP;

export default TokenAuthenticator.extend({
  authenticate(credentials) {
    let auth_token = credentials.auth_token;
    if (!Ember.isEmpty(auth_token)) {
      return resolve({auth_token});
    } else {
      return this._super(...arguments);
    }
  }
});
