import { NotImplementedError } from "../extensions/index.js";

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  let res = "";
  let addition = "";

  const additionString = "addition" in options ? String(options.addition) : "";
  const repeatTimes =
    options.repeatTimes !== undefined ? options.repeatTimes : 1;
  const additionSeparator =
    "additionSeparator" in options ? String(options.additionSeparator) : "|";
  const additionRepeatTimes =
    options.additionRepeatTimes !== undefined ? options.additionRepeatTimes : 1;
  const separator = "separator" in options ? String(options.separator) : "+";
  const inputString = str !== undefined ? String(str) : "";

  addition = `${additionString}${additionSeparator}`
    .repeat(additionRepeatTimes)
    .slice(0, addition.length - additionSeparator.length);
  res = `${inputString}${addition}${separator}`
    .repeat(repeatTimes)
    .slice(0, res.length - separator.length);

  return res;
}
