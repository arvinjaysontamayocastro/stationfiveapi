const MessagesService = require("./../services/messagesService");

exports.post = 
(req, res, next) => {
  var response_id = req.body.conversation_id;
  var message = req.body.message;

  var response = MessagesService.post(message);
  res.status(200).json(
    {
      response_id: response_id,
      response: response
    }
  );
};