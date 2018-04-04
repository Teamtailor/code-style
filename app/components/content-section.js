import Component from '@ember/component';
import { get, set } from '@ember/object';

export default Component.extend({
  classNames: ['article'],

  init() {
    this._super(...arguments);
    set(this, 'elementId', get(this, 'content.id'));
  },
});
