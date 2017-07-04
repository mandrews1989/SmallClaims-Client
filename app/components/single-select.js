import Ember from 'ember';
import KeypathMixin from '../mixins/keypath-mixin';

const {
  Component,
  Logger,
  computed,
  isEmpty,
} = Ember;

export default Component.extend(KeypathMixin, {
  nested: false,
  classNameBindings: [':select-list', 'nested'],
  hiddenTitle: 'More options',
  mixpanelEventName: null,
  keypathBindTo: 'selected',
  hasOther: computed.notEmpty('otherAction'),
  showCheckbox: false,
  handleSelect: function(option) {
    let keypath = this.get('keypath');
    if (!isEmpty(keypath)) {
      this.set(keypath, option);
    } else if (!isEmpty(this.attrs.select) && typeof this.attrs.select === 'function') {
      this.attrs.select(option);
    }

    let url = this.get('container').lookup('router:main').get('url');

    if (option && option.get && option.get('name')) {
      option = option.get('name');
    }

    Logger.log('select:', { option, url });
    //this.get('mixpanel.track')('select', { option, url });

    this.sendAction('nextAction');
  },
  actions: {
    select: function(option) {
      this.handleSelect(option);
    },
    selectOther: function() {
      this.sendAction('otherAction');
    },
    next: function() {
      this.sendAction('nextAction');
    }
  },
});
