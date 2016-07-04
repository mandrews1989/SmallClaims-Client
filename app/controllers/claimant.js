import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
	save: function() {
			var newClaimant = this.store.createRecord('claimant', {
					first_name: this.get('first_name'),
					middle_initial: this.get('middle_initial'),
					last_name: this.get('last_name'),
					address: this.get('address'),
					city: this.get('city'),
    				state: this.get('state'),
    				zip_code: this.get('zip_code'),
    				phone: this.get('phone'),
    				email: this.get('email'),
    				other_information: this.get('other_information'),
			});
			newClaimant.save();
		}
	}
});