/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = new Map();
    for (let i = 0; i <= nums.length - 1; i++) {
        if (map.get(nums[i]) !== undefined) {
            return [i, map.get(nums[i])];
        }
        map.set(target - nums[i], i);
    }
};

console.log(twoSum([2, 7, 11, 15], 9));
