let test = require('tape');
let exercises = require('./exercises');

test('Some Function', function(t) {
  t.test('an array is passed and some fulfills condition', function(t) {
    let arr = [2, 4, 8, 20];
    let isGreaterThanTen = function(num) {
      return num > 10;
    }
    let result = exercises.some(arr, isGreaterThanTen);
    t.true(result, 'should return true');
    t.end();
  });

  t.test('an array is passed and none fulfills condition', function(t) {
    let arr = [2, 4, 8, 10];
    let isGreaterThanTen = function(num) {
      return num > 10;
    }
    let result = exercises.some(arr, isGreaterThanTen);
    t.false(result, 'should return false');
    t.end();
  });

  t.test('an object is passed and some fulfills condition', function(t) {
    let col = { a: 8, b: 4, c: 12, d: 8 };
    let isGreaterThanTen = function(num) {
      return num > 10;
    }
    let result = exercises.some(col, isGreaterThanTen);
    t.true(result, 'should return false');
    t.end();
  });
});

test('Every Function', function(t) {
  t.test('an array is passed and all fulfill condition', function(t) {
    let arr = [2, 4, 8, 20];
    let isEven = function(num) {
      return num % 2 === 0;
    }
    let result = exercises.every(arr, isEven);
    t.true(result, 'should return true');
    t.end();
  });

  t.test('an array is passed and one does not fulfill condition', function(t) {
    let arr = [2, 4, 8, 9];
    let isEven = function(num) {
      return num % 2 === 0;
    }
    let result = exercises.every(arr, isEven);
    t.false(result, 'should return false');
    t.end();
  });

  t.test('an object is passed and one does not fulfill condition', function(t) {
    let col = { a: 8, b: 4, c: 11, d: 8 };
    let isEven = function(num) {
      return num % 2 === 0;
    }
    let result = exercises.every(col, isEven);
    t.false(result, 'should return false');
    t.end();
  });
});

test('Defaults Function', function(t) {
  t.test('one objects and one source are passed', function(t) {
    let result = exercises.defaults({ a: 1 }, { b: 2 });
    t.deepEqual(result, { a: 1, b: 2 }, 'should return defaults');
    t.end();
  });

  t.test('one objects and more than one source are passed', function(t) {
    let result = exercises.defaults({ a: 1 }, { b: 2 }, { a: 3, c: 4 });
    t.deepEqual(result, { a: 1, b: 2, c: 4 }, 'should return defaults');
    t.end();
  });
});
