var TimeLimitedCache = function () {
  this.map = {};
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  const keyInMap = this.map.hasOwnProperty(key);
  if (this.map.hasOwnProperty(key)) {
    clearTimeout(this.map[key][1]);
  }
  const timer = setTimeout(() => delete this.map[key], duration);
  this.map[key] = [value, timer];
  return Boolean(keyInMap);
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  if (this.map.hasOwnProperty(key)) {
    return this.map[key][0];
  }
  return -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  return Object.keys(this.map).length;
};

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */
