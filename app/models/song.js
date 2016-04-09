import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  quote: DS.attr('string'),
  artist: DS.belongsTo('artist')
});
