function smallestCommons(arr) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);

    let i = 2;
    while (i < 10000000) {

    // for (let i = 2; i < 65; i++) { // i is the multiple
        let check = false;
        for (let j = min; j <= max; j++) { 
        // start from min in range
        // divide by a number from low to high
            if (i % j !== 0) { // if not divisible, then continue
                check = false
                break;
            } else {
                check = true;
            }
        }
        if (check === true) return i;

        i++;
    }
    
  }

module.exports = smallestCommons;