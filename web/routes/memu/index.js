var fs = require('fs');
exports.index = function(req, res){
  list = fs.readdirSync('./files');
  res.render('memu/index', { list: list })
};
