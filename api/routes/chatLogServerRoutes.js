'use strict';
module.exports = function(app) {
  var chatLogServer = require('../controllers/chatLogServerController');

  // todoList Routes
  app.route('/chatlogs/:userId')
    .get(chatLogServer.get_chatLog)
    .post(chatLogServer.create_chatLog)
    .delete(chatLogServer.delete_all_chatLog);


  app.route('/chatlogs/:userId/:msgId')
    .delete(chatLogServer.delete_a_chatLog);
};
