const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor(depth = 1) {
    this.depth = depth
  }
  calculateDepth(arr) {
    if (arr.filter(el => Array.isArray(el)).length === 0) {
      const final = this.depth
      this.depth = 1
      return final
    } else {
      this.depth++
      return this.calculateDepth(arr.filter(el => Array.isArray(el))[0])
    }
  }
};