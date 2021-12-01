var mongoose = require('mongoose')
	, Schema = mongoose.Schema
	, ObjectId = Schema.ObjectId;

var PostSchema = new Schema({
	title: String
	, author: String
	, body: String
	, creataAt: { 
		type: Date
		, default: Date.now
	}
});

module.exports.PostSchema = PostSchema;
