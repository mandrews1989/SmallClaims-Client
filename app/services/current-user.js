import Ember from 'ember';

import config from '../config/environment';

const { inject: { service }, isEmpty, RSVP } = Ember;





export default Ember.Service.extend({
  session: service('session'),
  store: service(),

  load() {
    let authToken = this.get('session.data.authenticated.token');
    if (!isEmpty(authToken)) {
      return this.get('store').findRecord('user', authToken).then((user) => {
        this.set('user', user);
      });
    } else {
      return Ember.RSVP.resolve();
    }
  }
});