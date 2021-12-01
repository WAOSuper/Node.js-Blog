var PostModel = require('../models/post');

exports.list = function (req, res) {
	PostModel
		.find({})
		.sort('createAt', -1)
		.exec(function (err, posts) {
			res.render('post/list', {
				posts: posts
			});
		});
};

exports.create = function (req, res) {
	var newPost = new PostModel({
		title: req.body.title
		, body: req.body.body
	});

	newPost.save(function (err) {
		if (err) throw err;
		res.redirect('/posts');
		console.log('New user created: ', req.body);
	});
};

exports.view = function (req, res) {
	var _id = req.param('id');
	PostModel.findById(_id, function (err, post) {
		if (err) throw err;
		res.render('post/view', {
			post: post
		});
	});
};

exports.remove = function (req, res) {
	var _id = req.param('id');
	PostModel.findById(_id, function (err, post) {
		if (err) throw err;
		post.remove();
		res.redirect('/posts');
	});
};

exports.update = function (req, res) {
	var _id = req.param('id');
	var body = req.body;
	PostModel.findById(_id, function (err, post) {
		if (err) throw err;
		post.title = body.title;
		post.body = body.body;
		
		post.save(function (err) {
			if (err) throw err;
			res.redirect('/posts');
		});
	});
};

exports.createForm = function (req, res) {
	res.render('post/create-form');
};
exports.updateForm = function (req, res) {
	var _id = req.param('id');
	PostModel.findById(_id, function (err, post) {
		if (err) throw err;
		res.render('post/update-form', {
			post: post
		});
	});
};
exports.removeForm = function (req, res) {
	var _id = req.param('id');
	res.render('post/remove-form', {
		_id: _id
	});
};
