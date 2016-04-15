import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  // You can solve this with normalize
  // normalize is for the *individual* JSON API objects returned

  // normalize(modelClass, resourceHash){
  //   resourceHash.id = resourceHash.my_id.replace('quote_', '')
  //   return this._super(...arguments)
  // }

  // You can also solve it more efficiently with extractId
  extractId(modelClass, resourceHash) {
    return resourceHash[this.get('primaryKey')].replace('quote_', '')
  },

  // primaryKey tells us where to get the ID in a JSON API object of this type
  // default is 'id'
  primaryKey: 'my_id'
});
