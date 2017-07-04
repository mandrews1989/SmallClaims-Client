import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  isSelected: function() {
    var option = this.get('option'),
        selections = this.get('selected');
    if (Ember.isArray(selections)) {
      return selections.contains(option);
    } else {
      return Ember.isEqual(selections, option);
    }
  }.property('option', 'selected', 'selected.length'),
  actions: {
    click: function(option) {
      this.sendAction(undefined, option);
    }
  }
});
