/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe: function(x) {
            var result = val === x;
            if (result) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: function(x) {
            var result = val !== x;
            if (result) {
                return true;
            } else {
                throw new Error("Equal")
            }
        }
    };
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */

let myFunc = expect(10)

console.log(myFunc.toBe(null))