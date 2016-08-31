import Ember from 'ember';

export default Ember.Route.extend ({
  housesBought: Ember.inject.service(),
  model(params) {
    return this.store.findRecord('house', params.house_id);
  },
  actions: {
    goBackToList: function() {
      this.transitionTo('index');
    },
    buyHouse(house) {
      this.get("housesBought").buyHouse(house);
      this.transitionTo("houses-bought");
    }
  }
});
