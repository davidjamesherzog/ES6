(function () {
  'use strict';

  var showCategories = function(productId, ...categories) {
    console.log(categories instanceof Array);
  };
  showCategories(123, 'search', 'advertising');
})();

(function () {
  'use strict';

  var showCategories = function(productId, ...categories) {
    console.log(categories);
  };
  showCategories(123, 'search', 'advertising');
})();

(function () {
  'use strict';

  var showCategories = function(productId, ...categories) {
    console.log(categories);
  };
  showCategories(123);
})();

(function () {
  'use strict';

  var showCategories = function(productId, ...categories) {
  };
  console.log(showCategories.length);
})();

(function () {
  'use strict';

  var showCategories = function(productId, ...categories) {
    console.log(arguments.length);
  };
  showCategories(123, 'search', 'advertising');
})();

(function () {
  'use strict';

  var showCategories =
    new Function("...categories", "return categories;");
  console.log(showCategories('search', 'advertising'));
})();
