function merge(arrA, arrB) {
    let pointerA = 0;
    let pointerB = 0;
    let resArr = [];
    while (pointerA < arrA.length && pointerB < arrB.length){
        if (arrA[pointerA] <= arrB[pointerB]){
            resArr.push(arrA[pointerA]);
            pointerA++;
        } else {
            resArr.push(arrB[pointerB]);
            pointerB++
        }
    } 
    while (pointerA < arrA.length){
        resArr.push(arrA[pointerA]);
        pointerA++;
    }
    while (pointerB < arrB.length){
        resArr.push(arrB[pointerB]);
        pointerB++;
    }
    return resArr;
}

function mergeSort(arr) {
    //if array.length < 2, return array
    if (arr.length < 2){
        return arr;
    }
    //split the array into two shorter arrays
    let midpoint = Math.floor(arr.length/2);
    //run mergeSort on left and right array
    let left = mergeSort(arr.slice(0, midpoint));
    let right = mergeSort(arr.slice(midpoint));
    //run merge on left and right array
    return merge(left, right);
}

module.exports = { merge, mergeSort};