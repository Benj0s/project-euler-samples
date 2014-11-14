/**
 * Even Fibonacci numbers
 *
 * @description Each new term in the Fibonacci sequence is generated by adding the previous two terms.
 */

(function() {
    'use strict';
    var limit = 4e6;

    function fibonacciEvens(prevNum, currentNum, total) {
        var nextNum = prevNum + currentNum,
            total = total ? total : 0;
        if(currentNum % 2 === 0) {
            total += currentNum;
        }
        if(nextNum <= limit) {
            return fibonacciEvens(currentNum, nextNum, total);
        }
        return total;
    }

    return fibonacciEvens(1, 2);
})();
