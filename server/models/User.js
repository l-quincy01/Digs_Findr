const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    trim: true,
    // match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
  },
  governmentID: {
    type: String,
  },
  gender: {
    type: String,
    // enum: ["male", "female"],
  },
  userAddress: {
    type: String,
    // enum: ["male", "female"],
  },
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
