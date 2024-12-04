import mongoose from "mongoose";

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
    // match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Uncomment if email validation is needed
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
    // enum: ["male", "female"], // Uncomment if you want to restrict gender to specific values
  },
  userAddress: {
    type: String,
  },
});

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;
