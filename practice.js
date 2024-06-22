
/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    
  return function(...args){
      var exicutionCount = 0;
      console.log(exicutionCount)
      if (exicutionCount===0) {
         exicutionCount++
         return fn(...args)
        }else{
          return undefined
        }
      }
  }

 let fn = (a,b,c) => (a + b + c)
 let onceFn = once(fn)

console.log(onceFn(1,2,3))  // 6
console.log(onceFn(2,3,6))   // returns undefined without calling fn
console.log(onceFn(2,3,8))   // returns undefined without calling fn

