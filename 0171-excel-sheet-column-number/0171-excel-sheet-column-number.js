/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let num = 0;
    for(let i =0; i<columnTitle.length;i++){
        let charVal = columnTitle.charCodeAt(i) -64;
        num = num *26 +charVal;
    }
    return num;
};