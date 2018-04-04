import Component from '@ember/component';

export default Component.extend({
  tagName: 'section',
  classNames: ['article'],
  attributeBindings: ['content.id:data-content-id'],
});
