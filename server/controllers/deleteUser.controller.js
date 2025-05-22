import { User } from "../models/userModel.js";

export const deleteUser = async (req) => {
  const userDeleted = await User.findOneAndDelete(
    { username: req.body.username },
    { new: true }
  );
  return userDeleted;
};
