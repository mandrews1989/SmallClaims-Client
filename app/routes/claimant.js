import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		next: function() {
			let submission = this.get('submission'),
				claimant = this.get('controller.model');
				claimant.save().then(function (claimant) {
				submission.createSubmission({
				claimant: claimant
				});
				return submission; 
			});
			this.transitionTo('defendant');
		},
	},

	model() {
		let claimant = this.get('store').createRecord('claimant', {
			first_name: this.get('first_name'),
			});
		return claimant;
	},
});

