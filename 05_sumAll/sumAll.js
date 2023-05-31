const sumAll = function(start, end) {
    let final = 0;
    if (start < 0 || end < 0 || typeof start != 'number' || typeof end != 'number'){
        return 'ERROR'
    }
    if (start < end){
        for (let i = start; i <= end;i++){
            final += i
        }
    }
    else{
        for (let i = end; i <= start;i++){
            final += i
        }
    }
    return final
};

// Do not edit below this line
module.exports = sumAll;
