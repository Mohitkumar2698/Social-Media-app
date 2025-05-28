import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect("mongodb://localhost:27017/newDB");
  console.log("Database is Connected!");
};
