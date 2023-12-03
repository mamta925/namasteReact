/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(arr, k) {
    let map = {}
    for(let i = 0; i< arr.length; i++) {
          map[arr[i]] = (map[arr[i]]||0) +1 
    }
    console.log(map)
    let sortedMap = Object.entries(map).sort((a,b)=>a[1]-b[1]);
    console.log(sortedMap)
    let i = 0
    for(i = 0; i< sortedMap.length;i++)
    {
        
        k =  k - sortedMap[i][1]
        if(k < 0) break;
   
       
    }
    let result = [];
    while(i<sortedMap.length){
        result.push(sortedMap[i][0])
        i++;
    };
    return result;
};

findLeastNumOfUniqueInts([4,3,1,1,3,3,2], 3)