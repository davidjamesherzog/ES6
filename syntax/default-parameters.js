(function () {
  'use strict';

  var getProduct = function(productId = 1000) {
    console.log(productId);
  };
  getProduct();
})();


(function () {
  'use strict';

  var getProduct = function(productId = 1000, type = 'software') {
    console.log(productId + ', ' + type);
  };
  getProduct(undefined, 'hardware');
})();

(function () {
  'use strict';

  var getTotal = function(price, tax = price * 0.07) {
    console.log(price + tax);
  };
  getTotal(5.00);
})();

(function () {
  'use strict';

  var baseTax = 0.07;
  var getTotal = function(price, tax = price * baseTax) {
    console.log(price + tax);
  };
  getTotal(5.00);
})();

(function () {
  'use strict';

  var generateBaseTax = () => 0.07;
  var getTotal = function(price, tax = price * generateBaseTax()) {
    console.log(price + tax);
  };
  getTotal(5.00);
})();

(function () {
  'use strict';

  var getTotal = function(price, tax = 0.07) {
    console.log(arguments.length);
  };
  getTotal(5.00);
})();

(function () {
  'use strict';

  var getTotal = function(price = adjustment, adjustment = 1.00) {
    console.log(price + adjustment);
  };
  getTotal(5.00);
})();

(function () {
  'use strict';

  var getTotal = new Function("price = 20.00", "return price;");
  console.log(getTotal());
})();
