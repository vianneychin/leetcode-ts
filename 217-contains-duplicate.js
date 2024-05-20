/**
 *
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    const map = new Map();
    for (let i = 0; i <= nums.length - 1; i++) {
        if (map.has(nums[i])) {
            return true;
        }
        map.set(nums[i], 0);
    }
    return false;
};

// o(n) space
// o(n) time
