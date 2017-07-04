import Ember from 'ember';
import authRequest from 'small-claims-client/utils/auth-request';

export default Ember.Controller.extend({
  actions: {
    confirm: function() {
      return authRequest(
        '/password/reset/confirm',
        Ember.Object.create(this.getProperties('new_password'), this.model)
      ).then(
        function(){
          this.transitionToRoute('claimant');
        }.bind(this),
        function(response) {
          if (response.status === 200) {
            this.transitionToRoute('claimant');
          } else {
            console.warn('Failure', response, arguments);
          }
        }.bind(this)
      );
    }
  }
});
