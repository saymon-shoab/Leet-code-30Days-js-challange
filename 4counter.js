
let init = 5;

var createCounter = function(init) {
    let n = init
    return {
        increment: () => ++n ,
        reset: () => init,
        decrement: () => --n
    }
};
const counter = createCounter(5);

console.log(counter.increment())
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.decrement())
console.log(counter.reset())
