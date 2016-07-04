import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('claimant', function() {
     this.route('defendant', { path: ':claimant_id' }, function() {
       this.route('claim');
     });
  });
});

export default Router;

