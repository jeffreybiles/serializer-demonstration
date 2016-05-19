import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('books', function(){
    this.route('book', {path: ":book_id"});
    this.route('new');
  });
  this.route('quotes', function(){
    this.route('quote', {path: ':quote_id'});
  });
});

export default Router;
