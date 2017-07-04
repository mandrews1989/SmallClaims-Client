import Ember from 'ember';
const allPresent = (...args) => args.every(Ember.isPresent);

export default allPresent;
