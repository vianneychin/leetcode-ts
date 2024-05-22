/**
 * @param {string} s
 * @return {boolean}
 */
// Space complexity is o(n), Time complexity o(n)
var isPalindrome = function (s) {
    let cleanedStr = s.replace(/[^a-zA-Z0-0]/g, "").toLowerCase();
    let reversedCleanedStr = cleanedStr.split("").reverse().join("");

    return cleanedStr === reversedCleanedStr;
};

// Space complexity is o(n), Time complexity o(n)
var isPalindromeWithPointers = function (s) {
    let cleanedStr = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    for (let i = 0; i <= cleanedStr.length - 1; i++) {
        let currentLetter = cleanedStr[i];
        let letterFromEnd = cleanedStr[cleanedStr.length - 1];
        if (currentLetter !== letterFromEnd) {
            return false;
        }
        lastIndex--;
    }
    return true;
};

isPalindromeWithPointers("A man, a plan, a canal: Panama");
