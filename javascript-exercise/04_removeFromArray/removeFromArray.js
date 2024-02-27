
// #### CHECK SOLUTION
const removeFromArray = function (list1, ...Args) {
  let i = 0;
  while (i < list1.length) {
    for (const elem of Args) {
      if (list1[i] === elem) {
        list1.splice(i, 1)
        i--;
      }
    }
    i++;
  }
  console.log(list1)
  return list1
}

// Do not edit below this line
module.exports = removeFromArray;
