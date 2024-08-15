function bubbleSort(arr) {
    for (let i = arr.length - 1; i > 0; i--){
        let swapped = false;
        for (let j = 0; j < i; j++){
            if (arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        if (swapped = false) break;
    }
    return arr;
}

module.exports = bubbleSort;