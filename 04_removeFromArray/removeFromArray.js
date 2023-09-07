const removeFromArray = function(array, ...removed) {
    for(let i = 0; i < removed.length; i++){
        let indexRemoved = array.indexOf(removed[i])
        if(indexRemoved > -1)
        array.splice(indexRemoved,1)
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
