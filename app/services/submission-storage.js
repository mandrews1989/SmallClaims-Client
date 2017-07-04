import Ember from 'ember';
//import cookie from 'david/utils/cookie';
import localStorage from '../utils/local-storage';

//const {isEmpty} = Ember;

//const hasID = (obj) => !isEmpty(Ember.get(obj, 'id'));

export default Ember.Service.extend({
  store: Ember.inject.service(),

  persist(submission) {
    let serialized = submission.serialize({includeId: true}); // Include ID, so we can tell if the claim is persisted to the server
    localStorage.setItem('currentSubmission', JSON.stringify(serialized));
    // Did writing to localStorage actually work
    //if (localStorage.getItem('currentSubmission')) {
    //  cookie.set('hasClaim', claim.get('provider.name'));
    //}
  },
  });