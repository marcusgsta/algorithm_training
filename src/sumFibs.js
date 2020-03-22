function sumFibs(num) {

    // make an array of all fibonacci numbers
    let fibs = [1, 1];
    let sum = 2;
    for (let i = 2; i <= num; i++) {
        let next = fibs[i-2] + fibs[i-1]
        if (next <= num) {
            fibs.push(next)
            sum = next % 2 !== 0 ? sum + next : sum;
        } else {
            break;
        }
    }
    return sum;
  }
  
  console.log(sumFibs(1000));
  
module.exports = sumFibs