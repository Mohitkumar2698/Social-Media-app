import { User } from "../models/userModel.js";

export const postUser = async (req) => {
  const userInserted = await User.insertOne(req.body);
  return userInserted;
};
