import Ember from 'ember';

export default Ember.Service.extend({
  googleMaps: window.google.maps,
  findMap(container, options) {
    return new this.googleMaps.Map(container, options);
  },
  center(latitude, longitude) {
    return new this.googleMaps.LatLng(latitude, longitude);
  },
  createMarker(markerOptions) {
    return new this.googleMaps.Marker(markerOptions);
  },
  createService(map) {
    return new this.googleMaps.places.PlacesService(map);
  },
  getPlaces(service, map, request) {
    var createMarker = function(markerOptions) {
      return new window.google.maps.Marker(markerOptions);
    };
    var callback = function(results, status) {
      var newMap = map;
      {{debugger}}
      if (status === "OK") {
        for (var i=0; i<results.length; i++) {
          var place = results[i];
          var school_image = {
            url: 'images/school-emoji.png',
            scaledSize: new window.google.maps.Size(22,32)
          };
          var markerOptions = {
            position: {lat: place.geometry.location.lat(), lng: place.geometry.location.lng()},
            map: newMap,
            icon: school_image
          }
          createMarker(markerOptions);
        }
      }
    };
    service.nearbySearch(request,callback);
  }
});
