/**
 * @param {number[]} nums
 */
var ArrayWrapper = function (nums) {
  this.nums = nums;
};

ArrayWrapper.prototype.valueOf = function () {
  let res = 0;
  for (const num of this.nums) {
    res += num;
  }
  return res;
};

ArrayWrapper.prototype.toString = function () {
  return "[" + String(this.nums) + "]";
};

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */
