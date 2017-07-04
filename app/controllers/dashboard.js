import Ember from 'ember';


const {
  Controller,
  computed,
  //inject,
} = Ember;

export default Controller.extend({
  session: Ember.inject.service(),
  currentUser: Ember.inject.service(),
  
  //submissions: computed('model.submissions.[]', function() {
  //  return this.get('model.submissions').filterBy('id');
  //}),

  //noSubmissions: computed.empty('submissions'),
  queryParams: ['newSubmission'],
  newSubmission: false,
  passwordErrors: null,


});
