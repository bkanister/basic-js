const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (Array.isArray(arr)) {
      return 1 + Math.max(...arr.map(newArray => {
        if (newArray.length == 0) {
          return 1;
        }
        return this.calculateDepth(newArray);
      }))
    } else {
      return 0;
    }
  }
};