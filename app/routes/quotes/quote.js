import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('quote', params.quote_id)
  }
});