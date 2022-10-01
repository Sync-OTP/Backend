const otpModel = require("../models/otpModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.createOtp = catchAsync(async (req, res, next) => {
  //checks if there is any pesent user
  let otp = await otpModel.findOne({ extensionId: req.body.extId });

  if (otp) {
    otp = await otpModel.findOneAndUpdate(
      {
        extensionId: req.body.extId,
      },
      { $set: { otp: req.body.otp } }
    );
  } else {
    otp = await new otpModel({
      extensionId: req.body.extId,
      otp: req.body.otp,
    }).save();
  }

  console.log(otp);
  res.status(201).json({
    message: "Otp Updated Succesfully",
  });
});
