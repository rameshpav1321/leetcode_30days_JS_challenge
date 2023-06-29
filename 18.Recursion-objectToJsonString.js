/**
 * @param {any} object
 * @return {string}
 */
var jsonStringify = function (object) {
  if (object === null) {
    return "null";
  } else if (typeof object === "string") {
    return `"${object}"`;
  } else if (Array.isArray(object)) {
    const elements = object.map((item) => jsonStringify(item));
    return `[${elements.join(",")}]`;
  } else if (typeof object === "object") {
    const keys = Object.keys(object);
    const kvPairs = keys.map((key) => `"${key}":${jsonStringify(object[key])}`);
    return `{${kvPairs.join(",")}}`;
  } else {
    return `${object}`;
  }
};
