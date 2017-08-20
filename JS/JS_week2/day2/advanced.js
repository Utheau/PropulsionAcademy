/*

### Expanded Math Object

Create an expansion of the Math Object and add a method that returns
a random integer between 0 and the Max number passed as parameter

*/

let myMath = Object.create(Math);


myMath.randomInt = function(max, min=0) {
  return this.round(this.random() * max);
}

// console.log(myMath.randomInt(5));
// console.log(myMath.randomInt(10));
// console.log(myMath.random());
// console.log(myMath.round(0.5));

/*

### Add `reverse` method to `String` object

Add the `reverse` method to the String prototype

*/

String.prototype.reverse = function() {
  return this.split('').reverse().join('');
}

console.log('hello'.reverse());

/*

### `myEach`

Define a `myEach` function that simulates the `forEach` method on `Array`

DO NOT USE `forEach` in the implementation.

*/

function myEach(collection, fn) {
  for (let i = 0; i < collection.length; i++) {
    fn(collection[i], i, collection)
  }
}

// myEach([1,2,5], function(el, index, arr) {
//   console.log(index);
//   console.log(el);
//   console.log(arr);
// });

/*

### `myMap`

Define a `myMap` function that simulates the `map` method on `Array`

DO NOT USE `map`, but you can use your own `myEach`.

*/

function myMap(collection, fn) {
  let result = [];
  myEach(collection, function(el, index, arr) {
    let newElement = fn(el, index, arr);
    result.push(newElement);
  });

  return result;
}

let numbers = myMap([2, 4, 6], function(el, index) {
  return el * index;
});

// console.log(numbers);

/*

### `myFilter`

Define a myFilter function that simulates the `filter` method on `Array`.

DO NOT USE `filter`, but you can use your own `myEach`.

*/

function myFilter(collection, fn) {
  let result = [];
  myEach(collection, function(el, index, arr) {
    if (fn(el, index, arr)) {
      result.push(el);
    }
  });

  return result;
}

let filtered = myFilter([2, 8, 5, 15], function(el, index) {
  return el % index === 0;
});


function merge() {
  const obj = {};
  for(let i = 0; i<arguments.length; i++) {
    Object.keys(arguments[i]).forEach(key => {
      if(!obj[key] || obj[key] === 0) 
        obj[key] = arguments[i][key];
    });
  }
  return obj;
}


function invert(obj) {
  const newObj = {};
  Object.keys(obj).forEach(key => {
    const value = obj[key];
    newObj[value] = key; 
  });
  return newObj;
}
