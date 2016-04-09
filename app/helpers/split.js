import Ember from 'ember';

export function split(params/*, hash*/) {
  let splitter = params[0];
  let string = params[1];
  return string.split(splitter)
}

export default Ember.Helper.helper(split);
