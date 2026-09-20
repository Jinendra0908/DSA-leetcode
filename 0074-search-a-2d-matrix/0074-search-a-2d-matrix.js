/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {

    let fc = 0;
    let lc = matrix.length - 1;

    while (fc <= lc) {

        let midc = Math.floor((fc + lc) / 2);

        let first = matrix[midc][0];
        let last = matrix[midc][matrix[midc].length - 1];

        if (target > last) {
            fc = midc + 1;
        }
  
        else if (target < first) {
            lc = midc - 1;
        }

        else {

            let fr = 0;
            let lr = matrix[midc].length - 1;

            while (fr <= lr) {

                let midr = Math.floor((fr + lr) / 2);

                if (matrix[midc][midr] === target) {
                    return true;
                }

                if (matrix[midc][midr] > target) {
                    lr = midr - 1;
                } else {
                    fr = midr + 1;
                }
            }

            return false;
        }
    }

    return false;
};