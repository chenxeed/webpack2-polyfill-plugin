var test = require("ava");
var build = require("../build.common.js");
var fs = require("fs");

test.cb.serial("Build", function(t){
  build(__dirname, function(err, stats){
    if(err){
      t.fail(err);
    }else{
      t.pass();
    }
    t.end();
  })
});


test("Insert Function.prototype.keys", function(t){
  t.plan(3);

  Function.prototype.bind = null;

  t.is(Function.prototype.bind, null);

  var returnThisFunction = require("./index.output.js");

  var toBind = { binded:true };
  var returnThis = returnThisFunction(toBind);

  t.is(typeof Function.prototype.bind, "function");

  t.is(returnThis() === toBind, true);

})


