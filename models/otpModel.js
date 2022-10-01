const mongoose = require("mongoose");

const otpSchema = mongoose.Schema(
  {
    extensionId: {
      type: String,
    },
    otp: {
      type: String,
    },
  },
  { collection: "otpModel" }
);

module.exports = mongoose.model("otpModel", otpSchema);
