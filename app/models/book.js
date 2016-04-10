import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  publishYear: DS.attr('number'),
  author: DS.attr('string'),
  quotes: DS.hasMany('quote')
});
