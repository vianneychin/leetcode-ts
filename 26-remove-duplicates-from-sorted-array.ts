function removeDuplicates(nums: number[]): number {
    let x = 1;
    for (let i = 1; i <= nums.length - 1; i++) {
        let num = nums[i];
        let previousNum = nums[i - 1];
        if (num !== previousNum) {
            nums[x] = num;
            x++;
        }
    }
    return x;
}

removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
removeDuplicates([1, 1, 2]);
