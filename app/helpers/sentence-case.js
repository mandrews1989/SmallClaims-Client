import Ember from 'ember';

export function sentenceCase([string]) {
  // TODO make this more robust (maybe extract a list of exceptions?)
  return string.toLowerCase().replace('tv', 'TV');
}

export default Ember.Helper.helper(sentenceCase);
