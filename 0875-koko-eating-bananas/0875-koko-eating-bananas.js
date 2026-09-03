/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
   let low = 1;
    let high = Math.max(...piles);

    while (low <= high) {

        let k = Math.floor((low + high) / 2);

        let tt = 0;

        for (let i = 0; i < piles.length; i++) {
            tt += Math.ceil(piles[i] / k);
        }

        if (tt <= h) {
            high = k - 1;
        } else {
            low = k + 1;
        }
    }

    return low;
}; 