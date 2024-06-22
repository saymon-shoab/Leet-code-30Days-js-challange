// /**
//  * @param {Function} fn
//  * @return {Function}
//  */
// function memoize(fn) {
    
//   return function(...args) {
      
//   }
// }



//  let callCount = 0;
//  const memoizedFn = memoize(function (a, b) {
// 	 callCount += 1;
//    return a + b;
//  })
//  memoizedFn(2, 3) // 5
//  memoizedFn(2, 3) // 5
//  console.log(callCount) // 1 


function squire(n){
  return n*n;
}
function memoize(func) {
  let cache = {}
  return function(...args){
    let n = args[0];
    if (n in cache) {
      return cache[n]
    }else{
      let result = func(n)
      cache[n] = result
      return result
    }
  }
}
console.time()
// console.log(squire(34))
let efficiantResult = memoize(squire)
console.log(efficiantResult(4))
console.timeEnd();