/**
 *
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    // create a map where we will set the  { sorted-word => index to push }
    // we will only add each unique anagram once in the hasmap
    // after adding the index to push in the hashmap, we will push the word at the end of the array;
    // if the value already exists in the hashmap,
    // grab the value of the hashmap and push the word in the index via hashmap value
    let map = new Map();
    let answer = [];

    for (let i = 0; i <= strs.length - 1; i++) {
        let word = strs[i];
        let sortedWord = word.split("").sort().join("");
        if (!map.has(sortedWord)) {
            map.set(sortedWord, answer.length); // keeps track of where to push
            answer.push([word]); // first item to push
        } else {
            answer[map.get(sortedWord)].push(word);
        }
    }
    return answer;
};

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
// groupAnagrams([""]);
// groupAnagrams(["a"]);
