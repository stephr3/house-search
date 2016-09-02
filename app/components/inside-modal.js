import Ember from 'ember';

export default Ember.Component.extend({

  showForm: false,
  actions: {
    showForm() {
      this.set('showForm', true);
    },
    buyHouse() {
      this.set('showForm', false);
      this.sendAction('buyHouse');
    }
  }
});
