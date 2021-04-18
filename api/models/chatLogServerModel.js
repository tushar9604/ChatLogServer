'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ChatSchema = new Schema({
  user: {
    type: String,
    required: 'Kindly enter the username of the message',
    default: 'testUser'
  },
  message: {
    type: String,
    required: 'Kindly enter the message'
  },
  timestamp: {
    type: Number,
    default: Date.now
  },
  isSent: {
    type: Boolean,
    default: false
  }
}); 

module.exports = mongoose.model('ChatLog', ChatSchema);