import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  age: Number,
  gender: String,
  game: String,
});

export const User = mongoose.model("user", userSchema);
