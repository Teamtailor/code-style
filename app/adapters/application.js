import DS from 'ember-data';
import { get } from '@ember/object';

export default DS.JSONAPIAdapter.extend({
  buildURL(modelName, id, snapshot, requestType, query) {
    let url;

    if (requestType === 'queryRecord') {
      url = [modelName, query.version, `${query.path}.json`];
    } else if (requestType === 'findAll') {
      url = [modelName, `all${modelName}.json`];
    } else if (requestType === 'query' && modelName === 'page') {
      url = ['content', query.version, 'pages.json'];
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
