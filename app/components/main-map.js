import Ember from 'ember';

export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),
  distanceMatrixResults: [],
  actions: {
    createMap(markers) {
      var container = this.$('.map-display')[0];
      var options = {
        center: this.get('map').center(markers[0].get('latitude'), markers[0].get('longitude')),
        zoom: 15,
      };
      var newMap = this.get('map').findMap(container, options);
      this.get('map').createBikeLayer(newMap);
      //place markers
      var info= this.get('map').createInfoWindow();

      for (var i=0; i<markers.length; i++) {
        var data = markers[i];
        var myLatlng = this.get('map').center(data.get('latitude'), data.get('longitude'));
        var marker = this.get('map').createMarker({
          position: myLatlng,
          map: newMap,
          title: data.get('address')
        });
        var content = "<p>"+data.get('address')+"</p><p>"+ data.get('beds') + " beds | "+data.get('baths')+" baths | $"+ data.get('price');
        var service = this.get('map');
        (function (marker, data, newMap, content, info, service) {
          {{debugger}}
          service.addClickEvent(marker, data, newMap, content, info);
        }) (marker, data, newMap, content, info, service);
      }
    }
  }
});
