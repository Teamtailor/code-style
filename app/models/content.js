import DS from 'ember-data';

export default DS.Model.extend({
  language: DS.belongsTo('language', { async: true }),

  title: DS.attr('string'),
  html: DS.attr('string'),
});
