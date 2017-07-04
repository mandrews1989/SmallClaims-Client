import Ember from 'ember';
//import localStorage from 'SmallClaims-Client/utils/local-storage';

const {isNone, isEmpty, merge} = Ember;

let submissionProxy = Ember.ObjectProxy.extend({
  _currentSubmission: null,
  _session: null,
  _store:null,

  storage: Ember.inject.service('submissionStorage'),
  currentUser: Ember.inject.service('currentUser'),

  init() {
    this.get('_session').on('sessionInvalidationSucceeded', () => {
      this.get('storage').clear();
      localStorage.removeItem('lastRoute');
    });
    this._super(...arguments);
  },

  updateCurrentUser: function() {
    let currentSubmission = this.get('_currentSubmission'),
        currentUser = this.get('_session.currentUser');
    if (!isNone(currentSubmission) &&
        currentUser &&
        currentUser.get &&
        currentUser.get('id')) {
      currentSubmission.set('user', currentUser);
    }
  }.observes('_currentSubmission', '_session.currentUser'),

  persist(submission = this.get('_currentSubmission')) {
    if (!isNone(submission)) {
      this.get('storage').persist(submission);
    }
  },

  restore() {
    return this.get('storage').restore().then(restoredSubmission => {
      if (restoredSubmission) {
        this.set('_currentSubmission', restoredSubmission);
      }
      return restoredSubmission;
    });
  },

  content: function() {
    let currentSubmission = this.get('_currentSubmission');

    if (isEmpty(currentSubmission)) {
      currentSubmission = this.createSubmission();
    }

    return currentSubmission;
  }.property('_currentSubmission'),

  current: Ember.computed.alias('content'),

  createSubmission(data = {}) {
    let currentUser = this.get('_session.currentUser'),
    newSubmission; 

    if (currentUser && currentUser.get && currentUser.get('id')) {
      newSubmission = this.get('_store').createRecord('submission', merge({
        user: currentUser
      }, data));
    } else {
    newSubmission = this.get('_store').createRecord('submission', data);
    }
    this.set('_currentSubmission', newSubmission);
    //this.persist(newSubmission);

    return newSubmission;
  },
});

export function initialize(application) {
  application.register('submission:proxy', submissionProxy, {singleton: true});
  application.inject('submission:proxy', '_store', 'service:store');
  application.inject('submission:proxy', '_session', 'service:session');

  application.inject('component', 'submission', 'submission:proxy');
  application.inject('route', 'submission', 'submission:proxy');
  application.inject('controller', 'submission', 'submission:proxy');
}

export default {
  name: 'submission-initializer',
  after: ['ember-data', 'ember-simple-auth'],
  initialize: initialize
};