var webpack = require("webpack");
var path = require("path");
var Webpack2Polyfill = require("../");

module.exports = function(dir, callback){

  var config = {
    entry:{
      index: path.resolve(dir, "./index.js")
    },
    output:{
      path:dir,
      filename:"index.output.js",
      chunkFilename: "[name].outputChunk.js",
      pathinfo:true,
      libraryTarget:"commonjs2"
    },
    target:"node",
    plugins:[
      new Webpack2Polyfill()
    ]
  };

  webpack(config).run(function(err, stats){
    if(err){
      return callback(err);
    }
    if(stats.hasErrors()){
      return callback(stats.toString({
        "errors-only":true,
        "errorDetails":true,
        colors:true,
        chunks:false
      }))
    }
    callback(null, stats.toString({
      colors:true,
      chunks:false
    }))
  });

}
