import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

const { inject: { service }, isEmpty, RSVP } = Ember;

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  session: Ember.inject.service(),
  currentUser: Ember.inject.service(),
  model() {



   // let authToken = this.get('session.data.authenticated.auth_token');
   // if (!isEmpty(authToken)) {
   //   return this.get('store').findRecord('user', authToken);
   // };

  },
  setCurrentSubmission(submission) {
    this.set('submission._currentSubmission', submission);
  },
  actions: {
    newSubmission() {
      this.get('submission').createSubmission();
      this.transitionTo('claimant');
    },
    reviewEdit(submission) {
      this.transitionTo('editSubmission', submission);
    },
  },
});

