var fs = require("fs");
var stripComments = require("strip-json-comments");

module.exports = function(filepath){
  return stripComments(fs.readFileSync(filepath, {encoding: "utf8"}));
};
