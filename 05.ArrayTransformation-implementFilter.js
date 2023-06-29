/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  let res = [];
  arr.forEach((item, ind) => {
    if (fn(item, ind)) {
      res.push(item);
    }
  });
  return res;
};
