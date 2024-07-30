const catchAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((err) => {
      console.log(err);
      return res.status(400).json({
        status: "Error",
        message: err.message,
        data: null,
      });
    });
  };
};

module.exports = catchAsync;
