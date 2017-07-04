import Ember from 'ember';
import authRequest from 'small-claims-client/utils/auth-request';

export default Ember.Controller.extend({
  actions: {
    reset_password: function() {
      return authRequest(
        '/password/reset',
        this.getProperties('email')
      ).then(
        function(){
          this.transitionToRoute('reset-password/confirm/');
        }.bind(this),
        function(response) {
          if (response.status === 200) {
            this.transitionToRoute('claimant');
          } else {
            console.warn('Failure', response, arguments);
          }
        }.bind(this));
    }
  }
});
