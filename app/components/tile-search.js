import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createMap() {
      this.sendAction('createMap');
    }
  }
});
