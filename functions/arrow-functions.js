(function () {
  'use strict';

  // no parameter function
  var getPrice = () => 5.99;
  console.log(typeof getPrice);
  console.log(getPrice());

  // One param arrow function
  var getPrice = count => count * 4.00;
  console.log(getPrice(2));

  // multi-parameter function
  var getPrice = (count, tax) => count * 4.00 * (1 + tax);
  console.log(getPrice(2, .07));

  // multiple lines of code for arrow function
  var getPrice = (count, tax) => {
    var price = count * 4.00;
    price *= (1 + tax);
    return price;
  };
  console.log(getPrice(2, .07));

  // this example without arrow function
  var invoice = {
    number: 123,
    process: function () {
      console.log(this);
    }
  };
  invoice.process();

  // this example with arrow function
  var invoice = {
    number: 123,
    process: () => console.log(this)
  };
  invoice.process();

})();
