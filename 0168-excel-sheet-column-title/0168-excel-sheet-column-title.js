/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let result = "";
    while(columnNumber > 0){
        columnNumber--;
        let remain = columnNumber%26;
        result = String.fromCharCode(65+remain) + result;
        columnNumber = Math.floor(columnNumber/26);
    }
    return result;
};