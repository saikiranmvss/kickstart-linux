const express = require('express');
const http = require("http");
const fileUploading = require("express-fileupload");
const path = require('path');
const formRoutes = require('./routes/formRoutes');
const cookieParser = require('cookie-parser'); 
const corsMiddleware = require('./middlewares/corsMiddleware');
const cors = require("cors");
const connectDB = require('./config/db');
const emailRoutes = require('./routes/emailRoutes');  
const mailRoutes = require('./routes/mailRoutes');  
const userRoutes = require('./routes/userRoutes');  
const fileUploads = require('./routes/fileUploads');  
const journeyRoutes = require('./routes/journeyRoutes');  
const tokenRoutes = require('./routes/tokenRoutes');  
const pageRoutes = require('./routes/pageRoutes');  
const requestRoutes = require('./routes/requestRoutes');  
const authRoutes = require("./routes/authRoutes");
const authenticateToken = require("./middlewares/authenticateToken");
const session = require('express-session');
const chatRoutes = require("./routes/chatRoutes");
const chatSocket = require("./sockets/chatSocket");
const { Server } = require("socket.io");
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 5000;
app.use(session({
  secret: 'your-secret-key', 
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } 
}));

const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_APP_URL,
    methods: ["GET", "POST"],
  },
});

connectDB();

app.use(corsMiddleware);
app.use(express.json());
app.use(fileUploading());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use("/files", express.static(path.join(__dirname, "storage")));

app.use('/api/validate/', emailRoutes); 
app.use('/api/email',authenticateToken, mailRoutes);
app.use('/api/upload',authenticateToken, fileUploads);
app.use('/api/user', userRoutes);
app.use('/api/journey', journeyRoutes);
app.use('/api/tokens', tokenRoutes);
app.use('/api/page',pageRoutes );
app.use('/api/request',requestRoutes );
app.use("/api/auth",authenticateToken, authRoutes);
app.use("/api/chat", chatRoutes);

chatSocket(io);

app.get('/', (req, res) => {
  res.send('Welcome to the backend server!');
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});