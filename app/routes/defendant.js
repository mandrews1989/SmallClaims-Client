import Ember from 'ember';

export default Ember.Route.extend({

	actions: {
		next: function() {
		let submission = this.get('submission.current'),
			defendant = this.get('controller.model');
			defendant.save().then(function (defendant) {
				submission.set('defendant', defendant);
				//submission.save(); 
				});
			

			this.transitionTo('problem');
			},

		},

	model() {
		let defendant = this.store.createRecord('defendant',  {
					first_name: this.get('first_name'),
					//submission: submission 
					}); 
		return defendant;
		
	}
});