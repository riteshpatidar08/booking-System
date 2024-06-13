const admin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  }
  res.status(403).json({ message: 'Not authorized as an admin' });
};

module.exports = admin;