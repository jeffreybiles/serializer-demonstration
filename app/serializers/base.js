import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  keyForAttribute(key, method){
    return `${this._super(...arguments)}_attribute`
  },

  keyForRelationship(key, relationship, method){
    return this._super(...arguments).toUpperCase();
  }
});
