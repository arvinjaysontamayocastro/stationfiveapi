const express = require("express");

const MessagesController = require("./../controllers/messages");
const validateMessagesPost = require("./../validators/validateMessagesPost");

const router = express.Router();

router.post(
  "",
  validateMessagesPost,
  MessagesController.post
);

module.exports = router;
