import DS from 'ember-data';
import { computed, get } from '@ember/object';

export default DS.Model.extend({
  language: DS.belongsTo('language', { async: true }),

  title: DS.attr('string'),
  html: DS.attr('string'),

  strippedTitle: computed('title', function() {
    return get(this, 'title').replace(/(<([^>]+)>)/gi, '');
  }),
});
