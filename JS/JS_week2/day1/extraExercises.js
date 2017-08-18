let exercises = {};

/*
### isAnagram

Write a function that takes two words as an argument and returns true if they are anagrams (contain the exact same letters) and false otherwise.

*/

exercises.isAnagram = function(str1, str2) {
  let chars1 = str1.split('');
  for (let i = 0; i < str2.length; i++) {
    let char2 = str2[i];
    let indexInChars1 = chars1.indexOf(char2);
    if (indexInChars1 === -1) {
      return false;
    }
    chars1 = chars1.filter(function(el, index) {
      return index !== indexInChars1;
    })
  }

  if (chars1.length) {
    return false;
  }
  return true;
}

/*
### Box Volume

Write a function that takes three measurements in centimeters as input and returns a the volume over a liter.

It should return the liters with up to 4 decimals.

*/

exercises.boxVolume = function(base, height, depth) {
  return Math.round(((base * height * depth) / 1000) * 10000) / 10000;
}

/*

### Rectangle intersection

Write a function that expects two rectangles and returns the intersected rectangle if any.

Each rectangle is represented by two points in a two dimensional space.

For example: [1, 1] and [4, 3]. Is the rectangle with point the corners at [1, 1], [4, 1], [1, 3] and [4, 3].

*/

function createRect(rect) {
  return {
    left: Math.min(rect[0][0], rect[1][0]),
    right: Math.max(rect[0][0], rect[1][0]),
    bottom: Math.min(rect[0][1], rect[1][1]),
    top: Math.max(rect[0][1], rect[1][1])
  }
}

exercises.intersect = function(rect1, rect2) {
  let firstRect = createRect(rect1);
  let secondRect = createRect(rect2);

  let left = Math.max(firstRect.left, secondRect.left);
  let right = Math.min(firstRect.right, secondRect.right);
  let bottom = Math.max(firstRect.bottom, secondRect.bottom);
  let top = Math.min(firstRect.top, secondRect.top);

  if (left > right || bottom > top) {
    return [];
  }

  return [
    [left, bottom],
    [right, top]
  ];
}

module.exports = exercises;
