function diffTwoArrays(arr1, arr2) {
    var newArr = arr1.concat(arr2);

    return newArr.filter( (val) => {
        if (arr1.includes(val) && arr2.includes(val)) {
            return false;
        }
        return true;
    });
    
  }

module.exports = diffTwoArrays;