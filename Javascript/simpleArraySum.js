function simpleArraySum(ar) {
    let add = 0;
    // Write your code here
    for (let i = 0; i < ar.length; i++){
        add = parseInt(ar[i]) + add
    }
    return add
}