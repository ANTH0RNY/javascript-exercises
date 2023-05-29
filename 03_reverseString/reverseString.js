const reverseString = function(str) {
    const arr = str.split('').reverse();
    let empty = '';
    for (let i = 0; i < arr.length; i++){
        empty += arr[i]
    }
    return empty
};

// Do not edit below this line
module.exports = reverseString;
