import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: String,
  pass: String,
  bio: String,
  follower: Number,
  following: Number,
  posts: Number,
});

export const User = mongoose.model("user", userSchema);
