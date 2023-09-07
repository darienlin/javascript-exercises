const reverseString = function(string) {
    let word = ""
    for(let i = string.length; i >= 0; i--){
        word = word + string.slice(i - 1, i)
    }
    return word
};

// Do not edit below this line
module.exports = reverseString;
