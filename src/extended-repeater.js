const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let level1 = str + new Array(options.additionRepeatTimes).fill(options.addition === undefined ? '' : String(options.addition)).join(options.additionSeparator || '|')
  let level2 = new Array(options.repeatTimes).fill(level1).join(options.separator || '+')
  return level2
};
  