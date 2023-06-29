/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function (arr, size) {
  let res = [];
  let i = 0;
  // console.log(arr.length/size)
  while (i < Math.floor(arr.length / size)) {
    res.push(arr.slice(i * size, i * size + size));
    i++;
    // console.log(res)
  }
  arr.slice(i * size).length > 0 ? res.push(arr.slice(i * size)) : "";
  return res;
};
