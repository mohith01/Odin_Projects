const sumAll = function (arg1, arg2) {
  if (arg1 > 0 && arg2 > 0 && typeof (arg1) == "number" && typeof (arg2) == "number") {
    if (arg1 > arg2) {
      [arg1, arg2] = [arg2, arg1];
    }
    let sum1 = (arg1 - 1) * (arg1);
    let sum2 = (arg2) * (arg2 + 1)
    return ((sum2 - sum1) / 2)
  }
  else {
    return "ERROR"
  }

};

// Do not edit below this line
module.exports = sumAll;
