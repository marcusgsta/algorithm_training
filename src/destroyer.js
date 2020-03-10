function destroyer(arr) {
    args = [...arguments].slice(1);
    
    return arr.filter( ( val ) => 
    args.includes(val) ? false : true )
  }


module.exports = destroyer;