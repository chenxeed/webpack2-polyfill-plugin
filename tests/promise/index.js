module.exports = {
  getAPromise: function(resolved, rejected){
    return new Promise(function(resolve, reject){
      setTimeout(function(){
        if(resolved){
          resolve(resolved);
        }else if(rejected){
          reject(rejected)
        }
      },100);
    })
  },
  //require.ensure() use Promise
  getAEnsureLib: function(){
    return new Promise(function(resolve, reject){
      require.ensure([],function(require){
        var lib = require("./ensureLib.js");
        resolve(lib);
      });
    });
  },
  throwAError: function(){
    return new Promise(function(resolve, reject){
      throw new Error("aError")
    })
  }
}
