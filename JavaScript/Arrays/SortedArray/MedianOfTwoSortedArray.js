var findMedianSortedArrays = function(nums1, nums2) {
    // console.log(nums2.length);
    const finalArray = [];
    const fRes = [];
    let i;
    const len = finalArray.length ;
    // let len, even, odd;
    if(nums1.length === 0 || nums2.length === 0){
        if(nums1.length > 0){
            for (i = 0; i < nums1.length; i ++){
                return (nums1[i])
            }
        }
        if(nums2.length > 0){
            for (i = 0; i < nums2.length; i ++){
                return (nums2[i]);
            }
        }
    }
    if(nums1.length > 0){
        for (i = 0; i < nums1.length; i ++){
            finalArray.push(nums1[i]);
        }
    }
    if(nums2.length > 0){
        for (i = 0; i < nums2.length; i ++){
            finalArray.push(nums2[i]);
        }
    }
    // console.log(len);
    if(len % 2 === 0){
        const even = (len ) / 2;
        const a1 = finalArray[even];
        const b2 = finalArray[even-1];
        // console.log(fRes/2);
        return ((a1 + b2)/2);
    }
    if(len % 2 !== 0){
        const odd = (len )/ 2;
        console.log(odd);
        const a = finalArray[Math.ceil(odd)];
        const b = finalArray[Math.floor(odd)];
        fRes.push(a,b);
        // console.log(fRes/2);
        return (fRes.length);
        // return finalArray[odd];
    }
};

console.log(findMedianSortedArrays([],[1]));
