let test = require('tape');
let exercises = require('../extraExercises');

test('anagram function', function(t) {
  t.test('when an an anagram is passed', function(t) {
    t.true(exercises.isAnagram('hello', 'ollhe'), 'should return true');
    t.end();
  });

  t.test('when an no anagram is passed', function(t) {
    t.false(exercises.isAnagram('world', 'ordly'), 'should return false');
    t.end();
  });

  t.test('when an an anagram with repeated letter is passed', function(t) {
    t.false(exercises.isAnagram('fante', 'tenaff'), 'should return false');
    t.end();
  });
});

test('boxVolume function', function(t) {
  t.test('when passed 1 liter', function(t) {
    t.equal(exercises.boxVolume(10, 10, 10), 1, 'should return 1');
    t.end();
  });

  t.test('when passed less than 1 liter', function(t) {
    t.equal(exercises.boxVolume(5, 5, 5), 0.125, 'should return proper size');
    t.end();
  });

  t.test('when passed less than 1 liter', function(t) {
    t.equal(exercises.boxVolume(5, 5, 5.1), 0.1275, 'should return proper size');
    t.end();
  });
});

test('intersect function', function(t) {
  t.test('when no intersection is present', function(t) {
    t.deepEqual(
      exercises.intersect([[1, 1], [2, 2]], [[3, 3], [6, 7]]),
      [],
      'should return an empty array'
    );
    t.end();
  });

  t.test('when an intersection is present', function(t) {
    t.deepEqual(
      exercises.intersect([[1, 1], [4, 3]], [[2, 2], [6, 7]]),
      [[2, 2], [4, 3]],
      'should return the intersection rectangle'
    );
    t.end();
  });

  t.test('when one rectangle is inside another one', function(t) {
    t.deepEqual(
      exercises.intersect([[2, 1], [4, 4]], [[1, 1], [8, 8]]),
      [[2, 1], [4, 4]],
      'should return the smallest rectangle'
    );
    t.end();
  });
});
