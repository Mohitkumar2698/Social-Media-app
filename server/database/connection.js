import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect("mongodb://localhost:27017/instagram-db");
  console.log("Database is Connected!");
};
