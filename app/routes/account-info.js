import Ember from 'ember';

import config from '../config/environment';



export default Ember.Route.extend({
	session: Ember.inject.service(),

	actions: {
		submit: function() {
      let email = this.controllerFor('account-info').get('emailInput'),
          password = this.controllerFor('account-info').get('passwordInput'),
          submission = this.get('submission.current');

      Ember.$.ajax({
  			url: `${config.APP.API_HOST}/api/auth/register/`,
  			type: "POST",
  			data: JSON.stringify({
    			"email": email,
      		"password": password,
        }),
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function(xhr, settings) {
        xhr.setRequestHeader('Accept', settings.accepts.json);
        },
			}).then(response => {
          let currentUser = this.controllerFor('account-info').get('store').createRecord('user', {
              id: response.id,
              email: response.email  
          });
          submission.set('user', currentUser);
          submission.save();
        }).then(() => {                                                           
        return this.get('session').authenticate('authenticator:token-prepop', {
          identification: email, 
          password: password
        });
        });
      }, 

      submit2: function() {
          let submission = this.get('submission.current');
          submission.save();
          this.transitionTo('dashboard');

      },                                                                      
    },                                                                                          

	model() {

  
    },
});

