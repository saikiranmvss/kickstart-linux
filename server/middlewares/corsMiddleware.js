const cors = require('cors');

const corsMiddleware = cors({
  origin: ['http://localhost:3000', 'http://16.170.173.76'],
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type, Authorization',
  credentials: true,
});

module.exports = corsMiddleware;
