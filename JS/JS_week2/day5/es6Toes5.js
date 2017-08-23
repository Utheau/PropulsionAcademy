let fn = ({ routes }) => ({ routes });

// console.log(fn({ routes: 'some routes', anyKey: 'another key' }));

let es5Fn = function (opts) {
  return {
    routes: opts.routes
  };
};

// console.log(es5Fn({ routes: 'some routes', anyKey: 'another key' }));

const composeMixins = (...fns) => (
  obj = {},
  piped = x => fns.reduce((o, fn) => fn(o), x)
) => piped(obj);

const fn1 = (obj) => {
  obj.key1 = 'key1';
  return obj;
};

const fn2 = (obj) => {
  obj.key2 = 'key2';
  return obj;
};

console.log(composeMixins(fn1, fn2)({ key3: 'key3' }));
console.log(composeMixins(fn1)());

const composeMixinsES5 = function () {
  const fns = Array.prototype.slice.call(arguments);
  return function(obj, piped) {
    if (typeof obj === 'undefined') {
      obj = {};
    }
    if (typeof piped === 'undefined') {
      piped = function(x) {
        return fns.reduce(function(acc, fn) {
          return fn(acc);
        }, x);
      }
    }

    return piped(obj);
  }
}

console.log(composeMixinsES5(fn1, fn2)({ key3: 'key3' }));
console.log(composeMixinsES5(fn1)());
