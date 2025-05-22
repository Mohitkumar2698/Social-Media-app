import { User } from "../models/userModel.js";

export const updateUser = async (req) => {
  const userUpdated = await User.findOneAndUpdate(
    { username: req.body.username },
    req.body,
    { new: true }
  );
  return userUpdated;
};
