const jwt = require('jsonwebtoken');

const refreshAccessToken = (req, res) => {
    const refreshToken = req.cookies.refreshToken;
  
    if (!refreshToken) {
      return res.status(401).json({ message: "Refresh token missing" });
    }
  
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({ message: "Invalid refresh token" });
      }
  
      const newAccessToken = jwt.sign(
        { userId: user.userId },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "15m" }
      );
  
      res.status(200).json({ accessToken: newAccessToken });
    });
  };
  
  module.exports = { refreshAccessToken };