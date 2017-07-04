import Ember from 'ember';
import SingleSelect from './single-select';

const {
  isNone,
  isEmpty,
  Logger,
} = Ember;


export default SingleSelect.extend({
  showCheckbox: true,
  layoutName: 'components/single-select',
  handleSelect: function(option) {
    let keypath = this.get('keypath'),
        selected,
        _option = option,
        url = null;

    if (isNone(keypath)) {
      selected = this.get('selected');
    } else {
      selected = this.get(keypath);
    }

    try {
      url = this.get('container').lookup('router:main').get('url');
    } catch (e) {
      console.warn(e);
    }

    if (option && option.get && option.get('name')) {
      _option = option.get('name');
    }

    if (selected.contains(option)) {
      selected.removeObject(option);

      Logger.log('deselect:', { option: _option, url, selected });
      this.get('mixpanel.track')('deselect', { option: _option, url, selected });
    } else {
      selected.pushObject(option);

      Logger.log('select:', { option: _option, url, selected });
      this.get('mixpanel.track')('select', { option: _option, url, selected });
    }

    this.sendAction('select', option);
    this.sendAction('selectionEmpty', isEmpty(selected));
  },
});
