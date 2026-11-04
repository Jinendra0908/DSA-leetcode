/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let uniSet = new Set();
    let preSize = uniSet.size;
    for(let num in nums){
        uniSet.add(nums[num]);
        if(preSize === uniSet.size){
            return true;
        }
        preSize = uniSet.size;
    }
    return false;
};