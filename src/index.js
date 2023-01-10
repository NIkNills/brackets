module.exports = function check(str, bracketsConfig) {
  const arr = bracketsConfig.map((i) => i.join(""));

  for (let i = 0; i < arr.length; i++) {
    if (str.includes(arr[i])) {
      str = str.replaceAll(arr[i], "");
      i = -1;
    }
  }

  return str.length === 0 ? true : false;
};
