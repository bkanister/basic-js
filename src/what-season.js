const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!'
  } else if (Object.prototype.toString.call(date) !== '[object Date]') {
    throw new Error('THROWN')
  } else {
    const month = date.getMonth()
    switch (true) {
      case month >= 11 || month <= 1:
        return 'winter'
      case month >= 2 && month <= 4:
        return 'spring'
      case month >= 5 && month <= 7:
        return 'summer'
      case month >=8 && month <= 10:
        return 'autumn'
    }
  }
};
