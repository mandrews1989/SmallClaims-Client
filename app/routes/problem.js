import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({

	actions: {
		next: function() {
		let submission = this.get('submission.current'),
			department = this.get('submission.current.problem.department');
			submission.set('department', department);
				//submission.save(); 
		//		});
		//	

			this.transitionTo('account-info');
			},

		},

	model() {
		return RSVP.hash({
			submission: this.get('submission.current'),
      		departments: this.get('store').findAll('department'),
      		problems: this.get('store').findAll('problem'),
    });
}
});

