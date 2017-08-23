module.exports = {};

module.exports.some = function(col, fn) {
  if (Array.isArray(col)) {
    for(let i = 0; i < col.length; i++) {
      if (fn(col[i], i)) {
        return true;
      }
    }

    return false;
  }

  for(let key in col) {
    if (fn(col[key], key)) {
      return true;
    }
  }

  return false;
}

module.exports.every = function(col, fn) {
  if (Array.isArray(col)) {
    for(let i = 0; i < col.length; i++) {
      if (!fn(col[i], i)) {
        return false;
      }
    }

    return true;
  }

  for(let key in col) {
    if (!fn(col[key], key)) {
      return false;
    }
  }

  return true;
}

module.exports.defaults = function(col) {
  let sources = Array.prototype.slice.call(arguments, 1).reverse();
  let objects = [{}].concat(sources, [col]);
  return Object.assign.apply(null, objects);
}
