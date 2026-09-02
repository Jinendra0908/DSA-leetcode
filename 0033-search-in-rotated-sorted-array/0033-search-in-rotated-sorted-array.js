/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let le=0;
    let ri=nums.length-1;

    while(le<=ri){
       let mid =Math.floor((le+ri)/2);

       if(nums[mid]===target){
        return mid;
       }

       if(nums[le]<=nums[mid]){
        if(nums[le]<=target&& target<nums[mid]){
            ri=mid-1;
        }
        else{
            le=mid+1;
        }
       }
       else{
           if(nums[mid]<target&& target<=nums[ri]){
            le=mid+1;
        }
        else{
            ri=mid-1;
        }
       }
    }
    return -1;
};