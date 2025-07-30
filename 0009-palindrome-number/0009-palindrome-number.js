/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let ans = 0;
    let num = x;
    while (num > 0) {
        let rem = num % 10;
        ans = ans * 10 + rem;
        num = Math.floor(num / 10);
    }

    if (ans === x) {
        return true;
    } else {
        return false;
    }
};