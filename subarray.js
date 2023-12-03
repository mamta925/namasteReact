/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    let newArray = []
    for(let i =0; i< nums.length; i++){
        if(nums[i]%2 == 1){
            newArray.push(1);
        } else {
             newArray.push(0);
        }
    }
    let map = {}
     let prefixSum = 0;
      let length = 0;
      let count = 0;
     for(let i =0; i< newArray.length; i++){
          prefixSum = prefixSum+newArray[i];
         
          if(prefixSum == k){
              length = Math.max(length, i+1)
              count++;
          } else if(map[prefixSum-k] !== undefined){
                 length = Math.max(length, i-map[prefixSum-k]+1)
                  count++;
          }
          (map[prefixSum] == undefined) && (map[prefixSum] = i);
    }
    return count
};

numberOfSubarrays([1,1,2,1,1],3)