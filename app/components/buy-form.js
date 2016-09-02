import Ember from 'ember';

export default Ember.Component.extend({
  housesBought: Ember.inject.service(),
  actions: {
    buyHouse(house) {
      var first_name = this.get('first_name');
      var last_name = this.get('last_name');
      var down_payment = parseInt(this.get('down_payment'));
      var salary = parseInt(this.get('salary'));
      var minDownPayment = this.get('house').get('price') * 0.03;
      var minSalary = this.get('house').get('price') * 0.2;
      console.log(down_payment, salary, 'payment and salary');
      console.log(minDownPayment, minSalary, 'before if statement')
      if ((down_payment >= minDownPayment) && salary >= minSalary) {
        this.get("housesBought").buyHouse(house);
        this.sendAction('buyHouse');
        console.log('success!');
      }
    }
  }
});
