import Ember from 'ember';

export default Ember.Route.extend({

	actions: {
		next: function() {
			let claimant = this.modelFor('claimant.defendant');
			let defendant = this.store.createRecord('defendant', {
					first_name: this.get('first_name'),
					claimant: claimant,
				});
			defendant.save();
		}
	},
});