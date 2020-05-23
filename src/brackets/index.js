/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
  str = [...str];
  let numberOfCharacters = str.length;
  let openBrackets = ["(", "[", "{"];
  let closeBrackets = [")", "]", "}"];
  let numberOfOpenBrackets = {};
  let numberOfCloseBrackets = {};

  function countOpenBrackets() {
    for(let i = 0; i < str.length; i++) {
      if(openBrackets.includes(str[i])) {
        (!numberOfOpenBrackets[`${str[i]}`]) ?
        numberOfOpenBrackets[`${str[i]}`] = 1
        : numberOfOpenBrackets[`${str[i]}`]++;
      }
    }
  }

  function countCloseBrackets() {
    for(let i = 0; i < str.length; i++) {
      if(closeBrackets.includes(str[i])) {
        (!numberOfCloseBrackets[`${str[i]}`]) ?
        numberOfCloseBrackets[`${str[i]}`] = 1
        : numberOfCloseBrackets[`${str[i]}`]++;
      }
    }
  }



}

module.exports = isValid;
