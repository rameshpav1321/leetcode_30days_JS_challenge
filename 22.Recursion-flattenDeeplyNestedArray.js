/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
  let res = [];
  const flatten = (nums, l) => {
    for (let i = 0; i < nums.length; i++) {
      if (Array.isArray(nums[i]) && l > 0) {
        flatten(nums[i], l - 1);
      } else {
        res.push(nums[i]);
      }
    }
  };
  flatten(arr, n);
  return res;
};
