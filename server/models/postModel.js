import mongoose from "mongoose";

const postsSchema = new mongoose.Schema({
  img: String,
  title: String,
  desc: String,
  likes: Number,
  comments: Number,
  shares: Number,
});

export const Post = mongoose.post("post", postsSchema);
