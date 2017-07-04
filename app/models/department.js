import Ember from 'ember';
import DS from 'ember-data';

const {
  computed,
} = Ember;

export default DS.Model.extend({

  name: DS.attr('string'),
  order: DS.attr('number'),
  slug: computed('name', function() {
    return this.get('name').replace(/\s?\/\s?/g, ' ').dasherize();
  }),
  problems: DS.hasMany('problem', {async: false}),
});