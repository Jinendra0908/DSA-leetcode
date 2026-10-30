/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let i = 0;
    let j = 0;
    let result = false;
    let count = 0;
    let idx = -1;

    while (i < haystack.length) {

        if (needle[j] === haystack[i]) {

            if (count === 0) {
                idx = i;
            }

            count++;
            result = true;
            j++;
            i++;

            if (count === needle.length) {
                return idx;
            }

        } else {

            i = idx === -1 ? i + 1 : idx + 1;

            j = 0;
            count = 0;
            result = false;
            idx = -1;
        }
    }

    return -1;
};