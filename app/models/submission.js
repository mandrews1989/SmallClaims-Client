import attr from 'ember-data/attr';
import DS from 'ember-data';

export default DS.Model.extend({  
	amount_claimed: attr(),
    date_of_occurance: attr(),
    place_of_occurance: attr(),

  	claimant: DS.belongsTo('claimant', {async: false}),
  	defendant: DS.belongsTo('defendant', {async: false}),
  	department: DS.belongsTo('department', {async: false}),
  	problem: DS.belongsTo('problem', {async: false}),
  	user: DS.belongsTo('user', {async: false}),
});