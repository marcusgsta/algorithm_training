function whatIsInAName(collection, source) {
    var arr = [];
    // Only change code below this line
  
    arr = collection.filter( (obj) => {
      // first check for keys, then for value
      return Object.keys(source).every( (key) => {
        if (obj.hasOwnProperty(key)) {
          return obj[key] !== source[key] ? false : true;
        } 
      })
    });
    
    // Only change code above this line
    return arr;
  }


  module.exports = whatIsInAName;