function sortedUnion(arr) {
    // make one array
    // loop through arguments object
    let mySet = new Set();
    for (let obj of arguments) {
        for (let val of obj) {
            mySet.add(val)
        }
    }

    let res = [...mySet]
    return res;
  }
  
console.log(sortedUnion([1, 3, 2], [5, 2, 1, 4], [2, 1]));

module.exports = sortedUnion