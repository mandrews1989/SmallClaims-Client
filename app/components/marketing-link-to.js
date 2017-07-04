import Ember from 'ember';
import config from '../config/environment';
const {marketingPage} = config;

export default Ember.Component.extend({
  marketingPage,

  tagName: 'a',
  attributeBindings: ['target', 'href'],

  target: '_blank',
  link: null,
  linkName: null,

  href: function() {
    let marketingPage = this.get('marketingPage'),
        link = this.get('link');

    return marketingPage + link;
  }.property('link'),
});
