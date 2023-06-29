/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var throttle = function (fn, t) {
  let isFuncRunning = false;
  let nextArgs = null;
  const timeoutFunc = () => {
    if (nextArgs === null) {
      isFuncRunning = null;
    } else {
      fn(...nextArgs);
      nextArgs = null;
      isFuncRunning = setTimeout(timeoutFunc, t);
    }
  };
  return function (...args) {
    if (isFuncRunning) {
      nextArgs = args;
    } else {
      fn(...args);
      isFuncRunning = setTimeout(timeoutFunc, t);
    }
  };
};

/**
 * const throttled = throttle(console.log, 100);
 * throttled("log"); // logged immediately.
 * throttled("log"); // logged at t=100ms.
 */
