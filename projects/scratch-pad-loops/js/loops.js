// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //

  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }


  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //

  for (var i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
  }


  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //


  // plant the seed
  var toReturn = [];

  // water the seed
  for (var key in object) {
    toReturn.push(key);
  }

  // harvest!
  return toReturn;



  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //

  for (var key in object) {
    console.log(key);
  }


  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //

  // plant the seed
  var toReturn = [];

  // water the seed
  for (var key in object) {
    toReturn.push(object[key]);
  }

  // harvest!
  return toReturn;




  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  for (var key in object) {
    console.log(object[key]);
  }



  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the length of its key/value pairs
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //

  return Object.keys(object).length;


  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  
  /* 
  Try getting the values of the object into an Array 
  using your getObjectValues function 
  
  Then you can print the values in reverse since they are in an Array
  
  */
  
  var value = [];
  for (var key in object) {


    for (var i = key.length - 1; i >= 0; i--) {
      value.push(object[key[i]]);
    }
    console.log(value);
  }

  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  // here, export any references you need for tests //
  module.exports.printArrayValues = printArrayValues;
  module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
  module.exports.printObjectValues = printObjectValues;
  module.exports.getObjectKeys = getObjectKeys;
  module.exports.getObjectValues = getObjectValues;
  module.exports.printObjectKeys = printObjectKeys;
  module.exports.getObjectLength = getObjectLength;
  module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}