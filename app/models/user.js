import DS from 'ember-data';
import join from '../utils/join';

const {
  Model,
  hasMany,
  attr,
} = DS;

export default Model.extend({
  submissions: hasMany('submission', { async: true }),

  first_name: attr('string'),
    //middle_initial: attr(),
    //last_name: attr(),
    //address: attr(),
    //city: attr(),
    //state: attr(),
    //zip_code: attr(),
    //other_information: attr(),
    //phone: attr(),
  email: attr('string'),

  full_name: join(' ', 'first_name', 'last_name'),
});
