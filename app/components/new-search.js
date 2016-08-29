import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createMap() {
      var params = {
        latitude: parseFloat(this.get('latitude')),
        longitude: parseFloat(this.get('longitude'))
      };
      this.sendAction('createMap', params);
    }
  }
});
