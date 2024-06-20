
// const arr = [0,10,20,30]

// var filter = function(arr, fn) {
//    console.log(arr)

//    const result = []
//    for (let i = 0; i < arr.length; i++) {
//     if (fn(arr[i],i)) {
//        result.push(arr[i])
//     } 
//    }
//    return 
    
// };

// function greaterThen10(n,i){
//     if(i>n) return true
// }

// console.log(filter(arr))

var reduce = function(nums, fn, init) {
    const res = init
    for (let i = 0; i < nums.length; i++) {
        res = fn(res,arr[i])
        
    }
    return res
};