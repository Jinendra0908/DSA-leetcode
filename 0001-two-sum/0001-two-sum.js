/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   const arr = nums.map((num, index) => ({ num, index }));
    
    
    arr.sort((a, b) => a.num - b.num);
    
    
    let i = 0;
    let j = arr.length - 1;
    
    while (i < j) {
        let sum = arr[i].num + arr[j].num;
        
        if (sum === target) {
            
            return [arr[i].index, arr[j].index];
        } else if (sum > target) {
            j--;
        } else {
            i++;
        }
    }
};

