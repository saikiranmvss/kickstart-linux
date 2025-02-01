const express = require('express');
const path = require('path');
const formRoutes = require('./routes/formRoutes');
const corsMiddleware = require('./middlewares/corsMiddleware');
const connectDB = require('./config/db');
const emailRoutes = require('./routes/emailRoutes');  
const mailRoutes = require('./routes/mailRoutes');  
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 5000;
app.use(session({
  secret: 'your-secret-key', 
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } 
}));

connectDB();

app.use(corsMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', formRoutes);
app.use('/api', emailRoutes); 
app.use('/api/email', mailRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the backend server!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
