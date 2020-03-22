function sumPrimes(num) {
    // how to get prime numbers?
    // prime number is a whole number greater than 1 with exactly two divisors, 1 and itself.

    let primes = [];
    // loop and test each number
    for (let i = num; i > 1; i-- ) {
        // check i and divide with all numbers less than itself as long as greater than 1
        let count = 0;
        for (let j = num; j > 1; j--) {
            
            if (i % j === 0) {
                count++;
                if (count > 1) break;
            }    
        }
        if (count === 1) {
            primes.push(i);
        }
    }

    return primes.reduce( (a,b) => a + b);

}
  

console.log(sumPrimes(977));
module.exports = sumPrimes  