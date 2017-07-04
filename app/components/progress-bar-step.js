import Ember from 'ember';

const {
  Component,
  computed,
  isEqual,
} = Ember;

export default Component.extend({
  tagName: 'li',
  classNameBindings: [':progress-bar-step', 'isCurrent:current', 'isPrevious:previous'],

  step: null,
  currentStep: null,
  previousSteps: [],

  isCurrent: computed('step', 'currentStep', function(){
    return isEqual(this.get('step'), this.get('currentStep'));
  }),

  isPrevious: computed('step', 'previousSteps', function(){
    return this.get('previousSteps').includes(this.get('step'));
  }),

  index: 0, // Actual (0-based) index
  displayIndex: computed('index', function(){ // display 1-based index
    return this.get('index') + 1;
  }),

  tooltipContent: computed.alias('step.tooltip'),
  tooltipPlace: 'bottom',
  tooltipTypeClass: 'progress-bar',
});
