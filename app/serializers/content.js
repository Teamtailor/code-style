import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  extractId() {
    let id = this._super(...arguments);
    return id.replace('/', '-');
  },
});
