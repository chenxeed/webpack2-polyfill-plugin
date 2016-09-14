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


test("Insert Object.keys", function(t){
  t.plan(3);

  //use eval instead of require (Module.js) which use Object.keys
  var demoPath = require.resolve("./index.output.js");
  var demo = fs.readFileSync(demoPath, {encoding:"utf8"});

  Object.keys = null;

  t.is(Object.keys, null);

  var func = "(function(){ var module = {};\n " + demo + " ;\n return module.exports; }())"
  func = eval(func);

  t.is(typeof Object.keys, "function");

  t.deepEqual(func(), ["a", "b", "c"]);

})

