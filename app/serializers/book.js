import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  // This is in response to the type 'books' being renamed to 'kindling'
  // You can do it with normalizeResponse, but you have to have an if statement discerning between Array and Single

  // normalizeResponse(store, primaryModelClass, payload, id, requestType) {
  //   if(payload.data.length > 0){
  //     payload.data.forEach((book)=>{
  //       book.type = 'books';
  //     });
  //   } else {
  //     payload.data.type = 'books';
  //   }
  //   return this._super(...arguments);
  // },

  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
    payload.data.forEach((book)=>{
      book.type = 'books';
    });
    return this._super(...arguments)
  },

  normalizeSingleResponse(store, primaryModelClass, payload, id, requestType) {
    payload.data.type = 'books'
    return this._super(...arguments)
  }
});
