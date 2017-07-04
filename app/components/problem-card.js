import Ember from 'ember';

const {
  Component,
  computed,
} = Ember;

export default Component.extend({
  classNames: 'card problem-card',

  //department: null,
  //problems: [],

 _problems: computed('problems', 'department', function() {
    return this.get('problems').filterBy('department', this.get('department'));
  }),

  displayedProblems: computed.alias('_problems'),
  //hiddenProblems: computed.filterBy('_problems', 'showByDefault', false),
});
