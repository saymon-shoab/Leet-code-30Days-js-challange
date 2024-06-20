var filter = function(arr, fn) {
    var filteredArr = [];
    i = 0;
    for (i; i<arr.length; i++) {
        if (fn(arr[i],i)) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
};