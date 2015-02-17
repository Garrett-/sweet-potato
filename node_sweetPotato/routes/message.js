var express = require('express');
var router = express.Router();
var messages = [];

module.exports = function init(bayeux) {

  router.post('/', function(req, res){
    var message = req.body.message;

    console.log('message recieved', message);

    messages.push(message);

    var messageObj = {
      messages: messages
    };

    bayeux.getClient().publish('/chatroom/messages', messageObj);
    console.log('broadcast messages:', messages);

    res.json(messageObj);
  });

  router.get('/', function(req, res){
    console.log('Request for messages');
    res.json(messages);
  });

  return router;
};
