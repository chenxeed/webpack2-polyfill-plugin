module.exports = function(toBind){
  var fn = function(){
    return this;
  }
  return fn.bind(toBind);
}
