/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxCapacity = 0;
    let left = 0;
    let right = height.length -1;
    while(left<right){
        let waterLevel = Math.min(height[left],height[right]);
        let section = Math.max(left,right) - Math.min(left,right);
        let capacity = waterLevel*section;
        maxCapacity = Math.max(capacity,maxCapacity);

        if(height[left] >= height[right]){
            right--;
        }else{
            left++;
        }
    }
    return maxCapacity;
};