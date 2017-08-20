/*

### `myBind`

Define a `myBind` function that simulates the `bind` method on `Function`.

Remember that `bind` creates a new function, that when called, calls the
passed function with the keyword `this` set to the object passed when binding.


*/

let letsbind = function(un, dos, ...xxx) {
  console.log(xxx);
  console.log(typeof xxx);
  console.log(xxx.reduce(((a,b)=>a+b),0))
}
letsbind(1000, 1000, 1,2,3,4,5, 9, 100)

function myBind(fn, ctx) {
  return function() {
    fn.call(ctx);
  }
}


let obj = {
  name: 'Markov'
}
function printName() {
  console.log('Thy name is: ' + this.name);
}
// printName();
// let boundPrint = myBind(printName, obj);
// boundPrint();

/*

### Improve `myBind`

Improve your `myBind` to accept parameters just like `bind` does
https://developer.mozilla.org/ca/docs/Web/JavaScript/Reference/Global_Objects/Function/bind

First when binding the function. Also when calling the function returned by `bind`.

```javascript
```

*/

function myBindImproved(fn, ctx) {
  let args = Array.prototype.slice.call(arguments, 2);
  return function() {
    let otherArgs = Array.prototype.slice.call(arguments);
    let totalArgs = args.concat(otherArgs);
    fn.apply(ctx, totalArgs);
  }
}

let obj = {
  name: 'Markov'
}
//
function greetingsTo(name) {
  console.log('Hello ' + name + ', my name is: ' + this.name);
}
// greetingsTo('Fante');
// let boundGreeting = myBindImproved(greetingsTo, obj);
// boundGreeting('Fante');

function greetingsToAll(name, name2) {
  console.log('Hello ' + name + ' and ' + name2 + ', my name is: ' + this.name);
}

// greetingsToAll('Fante', 'Hornby');
// let boundToAll = myBindImproved(greetingsToAll, obj);
// boundToAll('Fante', 'Hornby');

// let boundAndFirst = myBindImproved(greetingsToAll, obj, 'Fante');
// boundAndFirst('Hornby');

/*

### Currying Calculator

Define a function that returns a currying calculator.

The currying calculator will keep returning a function until 5 parameters are passed in total.

Then it returns the sum of all 5 params.

*/

function createCurryCalc() {
  let args = [];
  return function calc() {
    let newArgs = Array.prototype.slice.call(arguments);
    args = args.concat(newArgs);
    if (args.length >= 5) {
      return args.reduce(function(acc, el) {
        return acc + el;
      }, 0);
    }
    return calc;
  }
}

let curryCalc = createCurryCalc();
let partial = curryCalc(2, 3, 4);
// console.log(partial(1, 3));

let curryCalc2 = createCurryCalc();
let partial2 = curryCalc2(2);
partial2 = partial2(4, 5)
// console.log(partial2(1, 3));

/*

# `curry`

Define your `curry` function implementation.

`curry` expects a function, any function, and returns a curried version of it

**Tip: Remember what is the 'arity' of a function**

*/

function calc(num1, num2, num3, num4, num5) {
  return num1 + num2 + num3 + num4 + num5;
}

function curry(fn) {
  let arity = fn.length;

  function helper(args) {
    return function() {
      let newArgs =  Array.prototype.slice.call(arguments);
      let totalArgs = args.concat(newArgs);
      if (totalArgs.length >= arity) {
        return fn.apply(this, totalArgs);
      }
      return helper(totalArgs);
    }
  }

  return helper([]);
}


let curriedCalc = curry(calc);
// console.log(curriedCalc(4, 5)(3, 4)(4));

/*

### `myNew`

Define `myNew` function that simulates the `new` keyword.

You already saw an implementation of this in the notes. However, that implementation does not handle parameters.

Add the possibility to pass parameters to your `myNew`. As many as the constructor needs.
*/

function myNew(fn) {
  let args = Array.prototype.slice.call(arguments, 1);
  let obj = {};
  fn.apply(obj, args);
  Object.setPrototypeOf(obj, fn.prototype);

  return obj;
}

function Cat(name) {
  this.name = name;
  this.legs = 4;
}

let markov = myNew(Cat, 'Markov')
// console.log(markov);
