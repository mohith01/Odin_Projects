const reverseString = function (string) {
  let res = ''
  for (let i = string.length - 1; i > -1; i--) {
    res += string[i]
  }
  return res
};

// Do not edit below this line
module.exports = reverseString;
