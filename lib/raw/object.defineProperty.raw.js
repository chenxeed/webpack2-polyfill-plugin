(function(){

  if( !Object.defineProperty ){
    //Firefox
    if( "__defineGetter__" in {} ){
      Object.defineProperty = function(obj, propName, accessors){
        if(accessors.get){
          obj.__defineGetter__(propName, function(){ return accessors.get.call(obj) })
        }
        if(accessors.set){
          obj.__defineSetter__(propName, function(val){ return accessors.set.call(obj, val) })
        }
      }
    }
  }

})();
