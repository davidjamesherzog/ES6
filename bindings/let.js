(function () {
  'use strict';

  let number1 = 12;
  console.log(number1);

  // undefined
  let number2;
  console.log(number2);

  // hoisting
  function updateNumber() {
    number5 = 12;
  }
  let number5 = null;
  updateNumber();
  console.log(number5);

})();
