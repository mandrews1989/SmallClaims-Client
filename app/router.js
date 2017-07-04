import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('claimant');
  this.route('defendant');
  this.route('problem');
  this.route('login');
  this.route('account-info');
  this.route('dashboard');
  this.route('reset_password', function() {
    this.route('confirm', {path: '/confirm/:uid/:token'});
  });
  this.route('register');
  this.route('settings');
});

export default Router;
