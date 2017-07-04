import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import config from '../config/environment';
import ResetScroll from '../mixins/reset-scroll';
import localStorage from '../utils/local-storage';

const {isEmpty} = Ember;
const { service } = Ember.inject;


var route = Ember.Route.extend(ApplicationRouteMixin, ResetScroll, {
	currentUser: service(),
  session: service(),

  //beforeModel() {
  //  return this._loadCurrentUser();
  //},

  //sessionAuthenticated() {
  //  this._super(...arguments);
  //  this._loadCurrentUser();
  //},

  //_loadCurrentUser() {
  //  return this.get('currentUser').load().catch(() => this.get('session').invalidate());
  //},

  //model: function(){
  //  return Ember.$.getJSON(config.APP.INITIAL_LOCATION).then(initialData => {
  //   
  //    return this.store.pushPayload(initialData);
  //  }).then(() => {
  //    return this.get('submission').restore();
  //  });
  //},
  actions: {
    toggleNav: function() {
      Ember.$("#nav-dropdown").toggle();
    },
    willTransition: function() {
      let dropdown = Ember.$('#nav-dropdown');
      if (dropdown.is(':visible')) {
        dropdown.hide();
      }
    },

    login: function() {
      this.transitionTo('login');
    },

    home: function() {
      this.transitionTo('claimant');
    },

    sessionAuthenticationSucceeded() {
    /* noTransition is just a sentinel to prevent the default
     * sessionAuthenticationSucceeded behavior from the simple-auth RouteMixins.
     *
     * The default behavior is for authenticate to trigger a route change to
     * `routeAfterAuthentication` (config/environment.js#L26) unless you’ve been
     * redirected to /login from an AuthenticatedRoute.
     *
     * The problem is that on signup we want to handle the transitioning ourselves,
     * so I just set a variable on the session object and check/clear it here
     */
      let attemptedTransition = this.get('session.attemptedTransition');
      let restorableRoute = localStorage.getItem('lastRoute');
      if (this.get('session.noTransition')) {
        this.set('session.noTransition', false);
      } else if (attemptedTransition) {
        attemptedTransition.retry();
        this.set('session.attemptedTransition', null);
      } else if (!isEmpty(restorableRoute)) {
        this.router.transitionTo(restorableRoute);
      } else {
        this.transitionTo(config['ember-simple-auth'].routeAfterAuthentication);
      }
    },

    //error: function(err) {
    //  Ember.onerror(err);
    //  return true;
    //},
    //redirectToRequestForm: function() {
    //  this.transitionTo('provider-request');
    //},
    logout() {
      this.get('session').invalidate();
    },
    removeMessage() {
      //Without this dismissing a flash message throws an error
    },
  },


 
});

export default route;
