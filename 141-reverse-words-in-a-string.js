/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let res = [];
    let currWord = "";
    for (let i = 0; i <= s.length - 1; i++) {
        let spaceChar = " ";
        if (s[i] !== spaceChar) {
            currWord += s[i];
        } else if (s[i] === spaceChar) {
            if (currWord) {
                res.push(currWord);
            }
            currWord = "";
        }
    }
    if (currWord) {
        res.push(currWord);
    }
    return res.reverse().join(" ");
};
