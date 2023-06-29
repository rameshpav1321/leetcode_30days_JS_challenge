/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  // if(nums.length===0){return init}
  // else{
  let val = init;
  for (const i in nums) {
    val = fn(val, nums[i]);
  }
  return val;
  // }
};
