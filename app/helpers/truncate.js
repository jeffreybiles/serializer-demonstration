import Ember from 'ember';

export function truncate(params/*, hash*/) {
  let length = params[0];
  let string = params[1];
  return string.slice(0, length);
}

export default Ember.Helper.helper(truncate);
