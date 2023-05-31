const removeFromArray = function(arr, ...args) {
    function remove(arr, int){
      const len = arr.length;
      const index = arr.indexOf(int)
      if (index === -1){
        return arr;
      }
      let result = []
      result = result.concat(arr.slice(0,index))
      result = result.concat(arr.slice(index+1, len))
      return result
     }
     let result = [...arr]
     for (let i of args){
        result = [...remove(result, i)];
     }
     return result
};

// Do not edit below this line
module.exports = removeFromArray;
