import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
    first_name: attr(),
    middle_initial: attr(),
    last_name: attr(),
    address: attr(),
    city: attr(),
    state: attr(),
    zip_code: attr(),
    other_information: attr(),
    phone: attr(),
    email: attr(),

    claimant: belongsTo('claimant', { async: false }),
});