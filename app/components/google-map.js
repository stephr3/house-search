import Ember from 'ember';

export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),
  actions: {
    createMap(params) {
      var latitude = 45.561145;
      var longitude = -122.6463247;
      var container = this.$('.map-display')[0];
      var options = {
        center: this.get('map').center(latitude, longitude),
        zoom: 15
      };
      var newMap = this.get('map').findMap(container, options);
      var image = {
        url: 'images/house-emoji.png',
        scaledSize: new google.maps.Size(22, 32)
      };
      var markerOptions = {
        position: {lat: latitude, lng: longitude},
        map: newMap,
        icon: image
      };
      var marker = this.get('map').createMarker(markerOptions);
      var infoWindowContent = {
        content: "<p><strong>Your future home!</strong></p>"
      };
      var info = this.get('map').createInfoWindow(infoWindowContent);
      marker.addListener('click', function(){
        info.open(newMap, marker);
      });
      var request = {
        location: this.get('map').center(latitude, longitude),
        radius: '1000',
        type: 'school'
      };
      var service = this.get('map').createService(newMap);
      this.get('map').getPlaces(service, newMap, request);
    }
  }
});
