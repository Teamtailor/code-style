/* globals Prism */

import Component from '@ember/component';
import { get, computed } from '@ember/object';

export default Component.extend({
  tagName: 'section',
  classNames: ['article'],
  attributeBindings: ['content.id:data-content-id'],

  githubLink: computed('content.id', function() {
    let path = get(this, 'content.id').replace('-', '/');
    return `https://github.com/Teamtailor/code-style/edit/master/content/${path}.md`;
  }),

  didRender() {
    this._super(...arguments);
    Prism.highlightAll();
  },
});
