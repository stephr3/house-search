import Ember from 'ember';

export default Ember.Component.extend({
  housesBought: Ember.inject.service(),
  showForm: false,
  actions: {
    showForm() {
      this.set('showForm', true);
    },
    buyHouse(house) {
      this.get("housesBought").buyHouse(house);
      this.transitionTo("houses-bought");
    }
  }
});
