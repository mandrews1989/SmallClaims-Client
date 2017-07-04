import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['form-field'],
  classNameBindings: ['explain:explain'],

  name: '',
  type: 'text',
  pattern: null,
  value: null,
  errors: null,
  isStatic: Ember.computed.equal('type', 'static'),
  isSelect: Ember.computed.equal('type', 'select'),
  isTextArea: Ember.computed.equal('type', 'textarea'),
  capitalizedName: function() {
    return this.get('name').capitalize();
  }.property('name'),
  label: Ember.computed.alias('capitalizedName'),

  explain: null,

  disabled: false,
  multiple: false,
  placeholder: null,
  content: null,
});
