let test = require('tape');
let exercises = require('../Exercises');

test('isString function', function(t) {
  t.test('when passed a string', function(t) {
    t.true(exercises.isString('hello'), 'should return true');
    t.end();
  });

  t.test('when passed an array', function(t) {
    t.false(exercises.isString([1, 2]), 'should return false');
    t.end();
  });
});

test('isArray function', function(t) {
  t.test('when passed a string', function(t) {
    t.false(exercises.isArray('hello'), 'should return false');
    t.end();
  });

  t.test('when passed an array', function(t) {
    t.true(exercises.isArray([1, 2]), 'should return true');
    t.end();
  });
});

test('typeOfElement function', function(t) {
  t.test('when passed a string', function(t) {
    t.true(exercises.typeOfElement('hello') === 'string', 'should return "string"');
    t.end();
  });

  t.test('when passed an array', function(t) {
    t.true(exercises.typeOfElement([1, 4]) === 'array', 'should return "array"');
    t.end();
  });

  t.test('when passed an object', function(t) {
    t.true(exercises.typeOfElement({}) === 'object', 'should return "object"');
    t.end();
  });

  t.test('when passed a function', function(t) {
    t.true(exercises.typeOfElement(function() {}) === 'function', 'should return "function"');
    t.end();
  });
});

test('areSameType function', function(t) {
  t.test('when passed only numbers', function(t) {
    t.true(exercises.areSameType([1, 2, 3]), 'should return true');
    t.end();
  });

  t.test('when passed numbers and strings', function(t) {
    t.false(exercises.areSameType([1, 2, 'hello']), 'should return false');
    t.end();
  });

  t.test('when passed objects and arrays', function(t) {
    t.false(exercises.areSameType([[1, 2], {}]), 'should return false');
    t.end();
  });
});

test('longest function', function(t) {
  t.test('when passed 2 different strings', function(t) {
    t.true(exercises.longest('abcccaa', 'acddddffzzz') === 'abcdfz', 'should return expected output');
    t.end();
  });

  t.test('when passed same string without repetitions', function(t) {
    let str = 'abcdefghijklmnopqrstuvwxyz';
    t.true(exercises.longest(str, str) === str, 'should return same string');
    t.end();
  });
});

test('convert function', function(t) {
  t.test('when passed a number', function(t) {
    t.deepEqual(
      exercises.convert(429563),
      [9, 6, 5, 4, 3, 2],
      'should output reversed numbers');
    t.end();
  });
});

test('countRepetitions function', function(t) {
  t.test('when passed a list of names', function(t) {
    let names = ['kerouac', 'fante', 'fante', 'buk', 'hemingway', 'hornby', 'kerouac', 'buk', 'fante'];
    let expected = {
      kerouac: 2,
      fante: 3,
      buk: 2,
      hemingway: 1,
      hornby: 1
    };
    t.deepEqual(
      exercises.countRepetitions(names),
      expected,
      'should return expected output'
    );
    t.end();
  });
});

test('isCaught function', function(t) {
  t.test('when the mouse is closer than 3 characters', function(t) {
    t.true(exercises.isCaught('C..m'), 'should return true');
    t.end();
  });

  t.test('when the mouse is further than 3 characters', function(t) {
    t.false(exercises.isCaught('C.....m'), 'should return false');
    t.end();
  });

  t.test('when the mouse is closer than 3 characters and Cat is not at the beginning', function(t) {
    t.true(exercises.isCaught('...C..m'), 'should return true');
    t.end();
  });
});

test('splitTheBill function', function(t) {
  t.test('when values are passed', function(t) {
    let values = {
        Amy: 20,
        Bill: 15,
        Chris: 10
    };
    let expected = { Amy: -5, Bill: 0, Chris: 5 };
    t.deepEqual(
      exercises.splitTheBill(values),
      expected,
      'it should expected output'
    );
    t.end();
  });
});

test('exp function', function(t) {
  t.test('when a number and base are passed', function(t) {
    t.equal(exercises.exp(2, 3), 8, 'should return expected number');
    t.end();
  });

  t.test('when a number and base 0 are passed', function(t) {
    t.equal(exercises.exp(2, 0), 1, 'should return 1');
    t.end();
  });

  t.test('when a number and base 1 are passed', function(t) {
    t.equal(exercises.exp(2, 1), 2, 'should return same number');
    t.end();
  });
});

test('factorial function', function(t) {
  t.test('when a number is passed', function(t) {
    t.equal(exercises.factorial(4), 24, 'shuold return expected number');
    t.end();
  });

  t.test('when 0 is passed', function(t) {
    t.equal(exercises.factorial(0), 1, 'should return 1');
    t.end();
  });
});

test('fibs function', function(t) {
  t.test('when asked for 8 numbers', function(t) {
    t.deepEqual(
      exercises.fibs(8),
      [0, 1, 1, 2, 3, 5, 8, 13],
      'should return expected sequence'
    );
    t.end();
  });

  t.test('when asked for 1 number', function(t) {
    t.deepEqual(
      exercises.fibs(1),
      [0],
      'should return expected [0]'
    );
    t.end();
  });
});

test('zeroSum', function(t) {
  t.test('when 1 pair is passed', function(t) {
    t.deepEqual(
      exercises.zeroSum([1, -1]),
      [[0, 1]],
      'should return an array with 1 pair'
    );
    t.end();
  });

  t.test('when more than 1 pair are passed', function(t) {
    t.deepEqual(
      exercises.zeroSum([1, 5, 0, -5, 3, -1]),
      [[0, 5], [1, 3]],
      'should return all pairs indexes'
    );
    t.end();
  });

  t.test('when no pair is passed', function(t) {
    t.deepEqual(
      exercises.zeroSum([0, 4, 3, 5]),
      [],
      'should return an empty array'
    );
    t.end();
  });
});
