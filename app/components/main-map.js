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
        //link needs to pass house object, so doesn't load...
        var beds = function(beds) {
          if(beds === 1){
            return "bed";
          } else {
            return "beds";
          }
        };
        var baths = function(baths) {
          if(baths === 1){
            return "bath";
          } else {
            return "baths";
          }
        };
        var content = "<p><a href='"+data.get('id')+"'>"+data.get('address')+"</a></p><p>"+ data.get('beds') + " " + beds(data.get('beds'))+" | "+data.get('baths')+" "+ baths(data.get('baths'))+ " | $" + data.get('price');
        var service = this.get('map');
        (function (marker, data, newMap, content, info, service) {
          {{debugger}}
          service.addClickEvent(marker, data, newMap, content, info);
        }) (marker, data, newMap, content, info, service);
      }
    }
  }
});
