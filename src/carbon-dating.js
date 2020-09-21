const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') {
    return false
  } else {
    const age = Math.ceil((Math.log(MODERN_ACTIVITY / sampleActivity)) / (Math.log(2) / HALF_LIFE_PERIOD));
    return age > 0 && age !== Infinity ? age : false
  }
};
