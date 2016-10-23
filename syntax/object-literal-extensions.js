(function () {
  'use strict';

  var price = 5.99, quantity = 30;
  var productView = {
    price,
    quantity
  };
  console.log(productView);
})();

(function () {
  'use strict';

  var price = 5.99, quantity = 10;
  var productView = {
    price,
    quantity,
    calculateValue() {
      return this.price * this.quantity
    }
  };
  console.log(productView.calculateValue());
})();

(function () {
  'use strict';

  var price = 5.99, quantity = 10;
  var productView = {
    price: 7.99,
    quantity: 1,
    calculateValue() {
      return this.price * this.quantity
    }
  };
  console.log(productView.calculateValue());
})();

(function () {
  'use strict';

  var price = 5.99, quantity = 10;
  var productView = {
    price,
    quantity,
    "calculate value"() {
      return this.price * this.quantity
    }
  };
  console.log(productView["calculate value"]());
})();

(function () {
  'use strict';

  var field = 'dynamicField'
  var price = 5.99;
  var productView = {
    [field]: price
  };
  console.log(productView);
})();

(function () {
  'use strict';

  var field = 'dynamicField'
  var price = 5.99;
  var productView = {
    [field + "-001"]: price
  };
  console.log(productView);
})();

(function () {
  'use strict';

  var method = 'doIt'
  var productView = {
    [method + "-001"]() {
      console.log("in a method");
    }
  };
  productView['doIt-001']();
})();

(function () {
  'use strict';

  var ident = 'productId';
  var productView = {
    get [ident]() {
      return true;
    },
    set [ident](value) {
    }
  };
  console.log(productView.productId);
})();
