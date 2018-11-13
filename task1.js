(function mod() {

    function isUndefined(variable){
        return variable === undefined;
    }

    function isNull(variable){
        return variable === null;
    }

    function isNaN(variable){
        return variable === NaN;
    }

    function isEmpty(obj){
        for (var key in obj) {
            return false;
          }
          return true;
    }

    function objectMap(object, callback) {
        return Object.keys(object).reduce(function(result, key) {
            result[key] = callback(object[key])
            return result
        }, {})
    }

    function random(min,max){
        return Math.floor(Math.random() * (max - min) ) + min;
    }

    function isIdenticalObjects(a,b){ 
        var aKeys = Object.keys(a);
        var bKeys = Object.keys(b);

        if (aKeys.length !== bKeys.length){
            return false;
        }
        
        for (key in a) {
          if (a[key] !== b[key]){
              return false;
          }     
        }
        return true;
    }


}()); 


