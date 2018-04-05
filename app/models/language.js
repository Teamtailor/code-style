import DS from 'ember-data';

export default DS.Model.extend({
  contents: DS.hasMany('content'),

  title: DS.attr('string'),
});
