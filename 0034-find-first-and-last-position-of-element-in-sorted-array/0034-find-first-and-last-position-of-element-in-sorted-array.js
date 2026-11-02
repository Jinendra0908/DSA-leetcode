/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var searchRange = function(nums, target) {
    let f = 0;
    let l = nums.length - 1;

    let fi = -1;
    let li = -1;

    while (f <= l) {
        let mid = Math.floor((f + l) / 2);

        if (nums[mid] === target) {
            fi = mid;
            l = mid - 1;
        } 
        else if (target < nums[mid]) {
            l = mid - 1;
        } 
        else {
            f = mid + 1;
        }
    }

    f = 0;
    l = nums.length - 1;

    while (f <= l) {
        let mid = Math.floor((f + l) / 2);

        if (nums[mid] === target) {
            li = mid;
            f = mid + 1;
        } 
        else if (target < nums[mid]) {
            l = mid - 1;
        } 
        else {
            f = mid + 1;
        }
    }

    return [fi, li];
};
