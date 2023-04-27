import User from "../models/userModel.js";
import colors from "colors";
import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";

// @description - Auth user & get JWT token
// @router GET /api/users/login
// @access Public
const authUser = asyncHandler(async () => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && user.matchPassword(password)) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }

  //   res.send({ email, password });
});

export { authUser };
