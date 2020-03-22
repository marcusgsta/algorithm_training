function fearNotLetter(str) {
    // loop through string 
    let current;
    for (let i = 0; i < str.length; i++) {
        current = str.charCodeAt(i)
        if (current + 1 !== str.charCodeAt(i+1) && current+1 <= "z".charCodeAt(0) ) {
            return String.fromCharCode(current+1)
        }
    }
    return undefined;
}

// console.log(fearNotLetter("abce"))
module.exports = fearNotLetter