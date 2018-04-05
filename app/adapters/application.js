import DS from 'ember-data';
import { get } from '@ember/object';

export default DS.JSONAPIAdapter.extend({
  buildURL(modelName, id, snapshot, requestType) {
    let url;

    if (id) {
      id = id.replace('-', '/');
    }

    if (requestType === 'findRecord') {
      url = [modelName, `${id}.json`];
    } else if (requestType === 'findAll') {
      url = [modelName, `all.json`];
    } else {
      return this._super(...arguments);
    }

    let host = get(this, 'host');
    let prefix = this.urlPrefix();

    if (prefix) {
      url.unshift(prefix);
    }

    url = url.join('/');
    if (!host && url && url.charAt(0) !== '/') {
      url = '/' + url;
    }

    return url;
  },
});
