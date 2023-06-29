/**
 * @param {Function[]} functions
 * @param {number} n
 * @return {Function}
 */
var promisePool = async function (functions, n) {
  let bool = false;
  return new Promise((resolve, reject) => {
    let funcIndex = 0;
    let inProgressFuncs = 0;
    function recHelp() {
      if (funcIndex >= functions.length && inProgressFuncs == 0) {
        resolve();
        return;
      }
      while (funcIndex < functions.length && inProgressFuncs < n) {
        inProgressFuncs++;
        const currFunc = functions[funcIndex]();
        funcIndex++;
        currFunc.then(() => {
          inProgressFuncs--;
          recHelp();
        });
      }
    }
    recHelp();
  });
};

/**
 * const sleep = (t) => new Promise(res => setTimeout(res, t));
 * promisePool([() => sleep(500), () => sleep(400)], 1)
 *   .then(console.log) // After 900ms
 */
