const express = require("express");
const router = express.Router();
const chatController = require("../controllers/chatController");

router.post("/create", chatController.createChat);
router.get("/messages/:chatId", chatController.getMessages);

module.exports = router;
