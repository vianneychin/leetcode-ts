/**
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    let sMap = {},
        tMap = {};

    for (let i = 0; i <= s.length - 1; i++) {
        sMap[s[i]] = sMap[s[i]] ? sMap[s[i]] + 1 : 1;
        tMap[t[i]] = tMap[t[i]] ? tMap[t[i]] + 1 : 1;
    }

    for (let key in sMap) {
        if (tMap[key] !== sMap[key]) {
            return false;
        }
    }
    return true;
};

isAnagram("anagram", "nagaram");
