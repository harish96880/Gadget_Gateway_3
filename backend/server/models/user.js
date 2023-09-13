const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  role: {
    type: String,
    default: "visitor",
  },
  verified: {
    type: Boolean,
    default: false,
  },
});

const UserModel = mongoose.model("Users-GG3", UserSchema);

module.exports = UserModel;
