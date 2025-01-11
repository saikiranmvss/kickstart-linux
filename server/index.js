const express = require('express');
const path = require('path');
const formRoutes = require('./routes/formRoutes');
const corsMiddleware = require('./middlewares/corsMiddleware');
const connectDB = require('./config/db');
const emailRoutes = require('./routes/emailRoutes');  

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(corsMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', formRoutes);
app.use('/api', emailRoutes); 

app.get('/', (req, res) => {
  res.send('Welcome to the backend server!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
