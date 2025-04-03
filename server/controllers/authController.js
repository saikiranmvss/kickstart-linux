const logout = (req, res) => {
    res.clearCookie('refreshToken', { httpOnly: true, secure: true, sameSite: 'strict' });
    return res.status(200).json({ message: 'Logged out successfully' });
  };
  
  module.exports = { logout };
  