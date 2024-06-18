/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function(...args) {
        const res = "Hello World"
        return res
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */