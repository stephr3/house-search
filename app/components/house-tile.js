import Ember from 'ember';

export default Ember.Component.extend ({
  favoriteHouses: Ember.inject.service(),
  inList: Ember.computed('favoriteHouses.favoriteHousesList.[]', function(){
    return this.get('favoriteHouses').includesFavoriteHouse(this.get('house'));
  }),
  actions: {
    addToFavorites(house) {
      this.get("favoriteHouses").addFavoriteHouse(house);
    },
    removeFromFavorites(house) {
      this.get("favoriteHouses").removeFromFavorites(house);
    }
  }
});
