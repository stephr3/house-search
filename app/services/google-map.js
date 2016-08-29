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
  createInfoWindow(content) {
    return new this.googleMaps.InfoWindow(content);
  },
  getPlaces(service, map, request) {
    var callback = function(results, status) {
      var newMap = map;
      var infoWindow = new window.google.maps.InfoWindow();
      if (status === "OK") {
        for (var i=0; i<results.length; i++) {
          var place = results[i];
          // var school_image = {
          //   url: 'images/school-emoji.png',
          //   scaledSize: new window.google.maps.Size(22,32)
          // };
          var markerOptions = {
            position: {lat: place.geometry.location.lat(), lng: place.geometry.location.lng()},
            map: newMap,
            icon: place.icon,
            title: place.name
          };

          var marker = new window.google.maps.Marker(markerOptions);
          // var info = new window.google.maps.InfoWindow(infoWindowContent);
          // marker.addListener(marker, 'click', function(){
          //   info.open(newMap, this);
          // });
          (function(marker, place) {
            var infoWindowContent =
              "<p><strong>"+place.name+"</strong></p>"+
              "<p>"+place.vicinity+"</p>";
            window.google.maps.event.addListener(marker, "click", function(e){
              infoWindow.setContent(infoWindowContent);
              infoWindow.open(newMap, marker);
            });
          })(marker, place);
        }
      }
    };
    service.nearbySearch(request,callback);
  }
});
