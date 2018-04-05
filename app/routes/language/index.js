import Route from '@ember/routing/route';
import { get } from '@ember/object';

export default Route.extend({
  model: function() {
    return get(this.modelFor('language'), 'contents');
  },
});
