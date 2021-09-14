import { NotImplementedError } from "../extensions/index.js";

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sampleActivity) {
  const num = parseFloat(sampleActivity);
  if (
    isNaN(num) ||
    typeof sampleActivity != "string" ||
    sampleActivity > MODERN_ACTIVITY ||
    sampleActivity <= 0 ||
    sampleActivity === "" ||
    arguments.length === 0 ||
    sampleActivity === null
  ) {
    return false;
  }
  const res = Math.ceil(
    Math.log(MODERN_ACTIVITY / num) / (Math.log(2) / HALF_LIFE_PERIOD)
  );
  return res;
}
