import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  // You can solve this with normalize
  // normalize is for the *individual* JSON API objects returned

  // normalize(modelClass, resourceHash){
  //   resourceHash.id = resourceHash.id.replace('quote_', '')
  //   return this._super(...arguments)
  // }

  // You can also solve it more efficiently with extractId
  extractId(modelClass, resourceHash) {
    return resourceHash.id.replace('quote_', '')
  }
});
