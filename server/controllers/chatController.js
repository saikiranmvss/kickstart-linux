const Chat = require("../models/Chat");
const Message = require("../models/Message");

exports.createChat = async (req, res) => {
  const { sender, receiver } = req.body;

  let chat = await Chat.findOne({ members: { $all: [sender, receiver] } });
  if (!chat) {
    chat = new Chat({ members: [sender, receiver] });
    await chat.save();
  }

  res.status(200).json(chat);
};

exports.getMessages = async (req, res) => {
  const { chatId } = req.params;
  const messages = await Message.find({ chatId });
  res.status(200).json(messages);
};
