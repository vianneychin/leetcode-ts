/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let cleanedStr = s.replace(/[^a-zA-Z0-0]/g, "").toLowerCase();
    let reversedCleanedStr = cleanedStr.split("").reverse().join("");

    return cleanedStr === reversedCleanedStr;
};
