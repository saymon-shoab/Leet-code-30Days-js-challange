/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function(x) {
        return functions.reduceRight((acc,curr)=> curr(acc), x)
    }
};

  const fn = compose([x => x + 1, x => 2 * x])
 console.log( fn(4) )
