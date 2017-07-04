import Ember from 'ember';
//import config from '../config/environment';

const {Controller} = Ember;

export default Controller.extend({
  session: Ember.inject.service(),
	identification: null,
  password: null,

  actions: {
    authenticate() {
    	let data = this.getProperties('identification', 'password');
    	this.set('password', null);
  		return this.get('session').authenticate('authenticator:token-prepop', data);
      //.then(() => {
      //  this.get('mixpanel.track')('login', { email: this.get('identification') });

        //if (errors.hasOwnProperty('email')) {
        //  this.set('_errors.email', 'Please enter a valid email address');
        //}
        //if (errors.hasOwnProperty('password')) {
        //  this.set('_errors.password', 'Please enter a valid password');
        //}
        //if (errors.hasOwnProperty('non_field_errors')) {
        //  this.set('_errors.general', 'David could not find a user with those credentials');
       // }
      },
    

    facebookAuth() {
      this.clearErrors();

      this.get('torii').open('facebook-connect').then(response => {
        let data = {
          socialBackend: 'facebook',
          socialToken: response.accessToken,
        };

        return this.get('session').authenticate('authenticator:social-auth', data);
        //.catch(() => {
        //  this.set('_errors.facebook', "We're having trouble logging you in with Facebook");
        //});
      });
    },
  },
});