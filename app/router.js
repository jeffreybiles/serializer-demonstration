import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('artists', function(){
    this.route('artist', {path: ":artist_id"})
  })
});

export default Router;
