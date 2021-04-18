'use strict';

var mongoose = require('mongoose'),
	ChatLog = mongoose.model('ChatLog');

exports.get_chatLog = function(req, res) {
	if(!req.query.limit){
		req.query.limit=10;		
	}
	ChatLog.find({user: req.params.userId}, function(err,chatlog) {
		if (err)
			res.send(err);
		res.json(chatlog);
	}).limit(parseInt(req.query.limit)).sort({ timestamp: -1 });
};

exports.create_chatLog = function(req, res) {
	var new_chatLog = new ChatLog(req.body);
	new_chatLog.user = req.params.userId;
	new_chatLog.save(function(err, chatlog) {
		if (err)
			res.send(err);
		res.json(chatlog._id);
	});
};

exports.delete_all_chatLog = function(req, res){
	ChatLog.remove({
		user: req.params.userId
	}, function(err,chatlog){
		if (err)
			res.send(err)
		res.json({message: 'Chat Logs successfully deleted'});
	});
};


exports.delete_a_chatLog = function(req, res){
	ChatLog.remove({
		user: req.params.userId,
		_id: req.params.msgId
	}, function(err,chatlog){
		if (err)
			res.send(err)
		//res.json({message: 'Chat Logs successfully deleted'});
		//res.json(chatlog);
		if(chatlog.deletedCount == 0)
			res.status(404).send({url: req.originalUrl + ' not found'});
		else
			res.json({message: 'Chat Logs successfully deleted'});
	});
};
/*
exports.get_a_book = function(req,res) {
	Book.find({uuid: req.params.bookId}, function(err,book) {
		if(err)
			res.send(err);
		res.json(book);
	});
};

exports.update_a_book = function(req, res) {
	Book.findOneAndUpdate({uuid: req.params.bookId}, req.body, {new: true}, function(err, book) {
		if (err)
			res.send(err);
		res.json(book);
	});
};

exports.delete_a_book = function(req, res){
	Book.remove({
		uuid: req.params.bookId
	}, function(err,book){
		if (err)
			res.send(err)
		res.json({message: 'Book successfully deleted'});
	});
};
*/
