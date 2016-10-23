(function () {
  'use strict';

  var prices = [12, 20, 18];
  var maxPrice = Math.max(...prices);
  console.log(maxPrice);
})();

(function () {
  'use strict';

  var prices = [12, 20, 18];
  var newPriceArray = [...prices];
  console.log(newPriceArray);
})();

(function () {
  'use strict';

  var newPriceArray = Array(...[, ,]);
  console.log(newPriceArray);
})();

(function () {
  'use strict';

  var newPriceArray = [...[, ,]];
  console.log(newPriceArray);
})();

(function () {
  'use strict';

  var maxCode = Math.max(..."43210");
  console.log(maxCode);
})();

(function () {
  'use strict';

  var codeArray = ["A", ..."BCD", "E"];
  console.log(codeArray);
})();
