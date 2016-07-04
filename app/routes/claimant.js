import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		next(claimant) {
			claimant.save().then(() => {
				this.transitionTo('claimant.defendant', claimant);
			});	
		},
	},

	model() {
		const claimant = this.store.createRecord('claimant'); 
		return claimant;
		}
});