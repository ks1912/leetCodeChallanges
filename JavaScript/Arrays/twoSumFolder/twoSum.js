var twoSum = function(nums, target) {
    const targetNum = target;
    let num1 = 0; 
    let num2 = 0;
    let sum = 0;
    let i, j;
    const path = [];
    let pathn1 = 0;
    let pathn2 = 0;
    // return path; // console.log(path);
    for(let i = 0; i < nums.length; i++){
        // console.log(i);
        pathn1 = i;
        num1 = nums[i];
            for(let j = 0; j < nums.length; j++){
                if (i != j){
                // console.log(j);
                // console.log(num1);
                num2 = nums[j];
                // if (pathn2 != j){
                    pathn2 = j;
                // }
                sum = num1 + num2;
                // console.log(sum);
                if(sum == targetNum){
                    path.push(pathn2);
                    path.push(pathn1);
                    // console.log(sum);
                    return path;
                }
            }
        }
    }
};

const output = twoSum([3,2,3],6);
console.log(output);