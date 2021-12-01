var mongoose = require('mongoose')
	, PostSchema = require('./schemas').PostSchema
	, PostModel = mongoose.model('Post', PostSchema);

module.exports = PostModel;
