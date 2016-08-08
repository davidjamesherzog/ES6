(function () {
  'use strict';

  // block scoping
  let number3 = 12;
  {
    let number3 = 2000;
  }
  console.log(number3);

  // reference error
  {
    let number4 = 2000;
  }

  try {
    console.log(number4);
  } catch(e) {
    console.log(e);
  }

  // block scoping in for loop
  let updateFunctions = [];
  for (let i = 0; i < 2; i++) {
    updateFunctions.push(function () {
      return i;
    });
  }
  console.log(updateFunctions[0]());

  // block scoping with constants
  const NY_TAX = .08;
  if (NY_TAX > 0) {
    const NY_TAX = .09;
  }
  console.log(NY_TAX);

})();
