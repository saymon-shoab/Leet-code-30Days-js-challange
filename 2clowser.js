/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    
    return ()=> n++;
    
};

 const counter = createCounter(10)
 console.log(counter())
 console.log(counter())
 console.log(counter())
//  counter() // 10
//  counter() // 11
//  counter() // 12
/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */