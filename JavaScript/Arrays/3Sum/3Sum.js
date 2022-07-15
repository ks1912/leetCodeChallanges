var threeSum = function(nums) {
    const len = nums.length;
    let sorted = nums.sort();
    const arr = [];
    const fArr = [];
    let i,j,k;
    if(sorted.length === 0){
        // console.log("Executed");
        return arr;
    }
    if(sorted.length === 1 & sorted[0] === 0){
        // console.log("Executed");
        return arr;
    }
    for(i = 0; i< sorted.length-2; i++){
        for(j = 0; j< sorted.length-1; j++){
            if(j != i){
                for(k = 0; k<sorted.length; k++){
                    if( k != j & k != j){
                        if((sorted[i] + sorted[j] + sorted[k]) === 0){
                            arr.push([sorted[i], sorted[j], sorted[k]]);
                            // fArr.push(arr);
                            // console.log("Itteration Completed");
                        }
                    }
                }
            }
        }
    }
    return arr;
};

const output = threeSum([-1,0,1,2,-1,-4]);
console.log(output);