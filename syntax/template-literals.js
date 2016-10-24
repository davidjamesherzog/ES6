(function () {
  'use strict';

  let invoiceNum = '1350';
  console.log(`Invoice Number: ${invoiceNum}`);
})();

(function () {
  'use strict';

  let invoiceNum = '1350';
  console.log(`Invoice Number: ${invoiceNum}`);
})();

(function () {
  'use strict';

  let invoiceNum = '1350';
  console.log(`Invoice Number: \${invoiceNum}`);
})();

(function () {
  'use strict';

  let message = `A
  B
  C`;
  console.log(message);
})();

(function () {
  'use strict';

  let invoiceNum = '1350';
  console.log(`Invoice Number: ${"INV-" + invoiceNum}`);
})();

(function () {
  'use strict';

  function showMessage(message) {
    let invoiceNum = '99';
    console.log(message);
  }

  let invoiceNum = '1350';
  showMessage(`Invoice Number: ${invoiceNum}`);
})();

(function () {
  'use strict';

  function processInvoice(segments, ...values) {
    console.log(segments);
    console.log(values);
  }

  let invoiceNum = '1350';
  let amount = '2000';
  processInvoice `Invoice: ${invoiceNum} for ${amount}`;
})();
