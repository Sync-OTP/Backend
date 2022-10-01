const otpModel = require("../models/otpModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.getOtp = catchAsync(async (req, res, next) => {
  //checks for extensionId and sends it
  let otp = await otpModel.findOne({ extensionId: req.body.extId });

  console.log(otp);
  res.status(201).json({
    message: "Otp Sent Succesfully",
    otp
  });
});
