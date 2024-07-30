const allowTo = (...roles) => {
  return (req, res, next) => {
    const userRole = req.user.role;
    if (!roles.includes(userRole)) {
      return res.status(400).json({
        status: "Error",
        message: "You are not allowed to perform this action.",
        data: null,
      });
    } else {
      next();
    }
  };
};

module.exports = allowTo;
