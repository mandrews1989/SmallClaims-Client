import attr from 'ember-data/attr';
import DS from 'ember-data';
import join from '../utils/join';


export default DS.Model.extend({
	first_name: attr('string'),
    //middle_initial: attr(),
    //last_name: attr(),
    //address: attr(),
    //city: attr(),
    //state: attr(),
    //zip_code: attr(),
    //other_information: attr(),
    //phone: attr(),
    //email: attr(),

    submission: DS.belongsTo('submission', {async: false}),

    full_name: join(' ', 'first_name', 'last_name'),
});