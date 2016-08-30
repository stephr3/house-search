import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findById(params.post_id);
  },
  actions: {
    goBackToList: function() {
      this.transitionTo('index');
    }
  }
});
