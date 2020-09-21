const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
      throw new Error()
    } else {
      let newArr = [];
      for (let i = 0; i < arr.length; i++) {
        switch(true) {
          case arr[i-1] === '--discard-next':
            continue;
          case arr[i] === '--discard-prev':
            newArr.pop()
            continue;
          case arr[i-1] === '--double-next':
            if (arr[i] !== undefined) {
              newArr.push(arr[i], arr[i])
            }
            continue;
          case arr[i] === '--double-prev':
            if (arr[i-1] !== undefined) {
              newArr.push(newArr[newArr.length-1])
            }
            continue
          default:
            newArr.push(arr[i])
        }
      }
      return newArr.filter(el => {
        return el !== '--discard-next' && el !== '--discard-prev' && el !== '--double-next' && el !== '--double-prev'
      })
    }
};
