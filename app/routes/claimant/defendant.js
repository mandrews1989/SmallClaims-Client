import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').find('claimant', params.claimant_id);
  }
});