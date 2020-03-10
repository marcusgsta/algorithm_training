function destroyer(arr) {
    let newArr = arguments[0];
    arr = [...arguments].slice(1, arr.length);
    
    return newArr.filter( ( val ) => {
        if (arr.includes(val)) {
            return false;
        }
        return true;
    })
  }


module.exports = destroyer;