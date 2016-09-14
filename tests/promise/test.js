var test = require("ava");
var build = require("../build.common.js");

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

test("Insert Promise", function(t){
  t.plan(6);

  global.Promise = null;

  t.is(global.Promise, null);

  var demo = require("./index.output.js");

  return demo.getAPromise("resolved")
  .then(function(res){
    t.is(res, "resolved")
  })
  .then(function(){
    return demo.getAPromise(null, "rejected")
    .then(function(){}, function(err){
      t.is(err, "rejected")
    })
  })
  .then(function(){
    //require.ensure() use Promise
    return demo.getAEnsureLib().then(function(lib){
      t.is(lib.foo, "foo")
    })
  })
  .then(function(){
    return demo.throwAError().catch(function(e){
      t.true(e instanceof Error)
      t.is(e.message, "aError")
    })
  })

})
