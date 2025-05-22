import { User } from "../models/userModel.js";

export const getUser = async () => {
  const users = await User.find();  
  return users;
};
