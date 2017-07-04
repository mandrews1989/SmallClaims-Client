import Ember from 'ember';
import config from '../config/environment';

export default function(url, data) {
  if (url[0] === '/') {
    url = config.APP.API_HOST + '/api/auth' + url;
    if (url[url.length - 1] !== '/') {
      url += '/';
    }
  }
  return Ember.$.ajax({
    url: url,
    type: 'POST',
    data: JSON.stringify(data),
    dataType: 'json',
    contentType: 'application/json',
    beforeSend: function(xhr, settings) {
      xhr.setRequestHeader('Accept', settings.accepts.json);
    },
  });
}

