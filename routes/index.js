var post = require('./post');

/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index');
};

exports.post = post;
