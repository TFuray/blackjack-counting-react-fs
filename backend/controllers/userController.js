import asyncHandler from "express-async-handler"
import User from "../models/userModel.js"
import generateToken from "../utils/generateToken.js"

// @desc    Auth user/set token
// route    POST /api/user/auth
// @access  public
const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Auth User" })
})

// @desc   Register a new user
// route    POST /api/user/
// @access  public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error("User already exists")
  }

  const user = await User.create({ name, email, password })
  if (user) {
    generateToken(res, user._id)
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    })
  } else {
    res.status(400)
    throw new Error("Invalid user data")
  }
})

// @desc    logout user
// route    POST /api/user/logout
// @access  public
const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Logout User" })
})

// @desc    Get user profile
// route    GET /api/user/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Profile" })
})

// @desc    Update user profile
// route    PUT /api/user/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update Profile" })
})

export { authUser, getUserProfile, logoutUser, registerUser, updateUserProfile }
