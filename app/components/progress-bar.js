import Ember from 'ember';

const {
  Component,
  computed
} = Ember;

const steps = [
  { name: 'Your Info', tooltip: 'Your Info' },
  { name: 'Their Info', tooltip: '' },
  { name: 'What Happened', tooltip: '' },
  { name: 'Submit', tooltip: '' },
];

export default Component.extend({
  steps,
  step: '',
  classNames: ['progress-bar'],

  currentStep: computed('step', function(){
    const step = this.get('step'),
          steps = this.get('steps');

    return steps.findBy('name', step);
  }),

  previousSteps: computed('currentStep', function(){
    const steps = this.get('steps'),
          currentStep = this.get('currentStep'),
          currentIndex = steps.indexOf(currentStep);

    if (currentIndex) {
      return steps.slice(0, currentIndex);
    } else {
      return [];
    }
  }),
});