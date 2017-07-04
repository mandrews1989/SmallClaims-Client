import Ember from 'ember';

const {computed} = Ember;

export default function join(separator, ...keys) {
  // Get the values of the keys, filter out any falsy values, and then join them
  return computed(...keys, function() {
    return keys.map(key => this.get(key)).filter(Boolean).join(separator);
  });
}
