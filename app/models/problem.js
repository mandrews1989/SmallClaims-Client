import DS from 'ember-data';

export default DS.Model.extend({
  department: DS.belongsTo('department', {async: false}),

  name: DS.attr('string'),
  description: DS.attr('string'),
  order: DS.attr('number'),
  departmentOrder: DS.attr('number'),

});
