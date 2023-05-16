import asyncHandler from "express-async-handler"

// @desc    Auth user/set token
// route    POST /api/user/auth
// @access  public
const authUser = asyncHandler((req, res) => {
  res.status(200).json({ message: "Auth User" })
})

// @desc   Register a new user
// route    POST /api/user/
// @access  public
const registerUser = asyncHandler((req, res) => {
  res.status(200).json({ message: "Register User" })
})

// @desc    logout user
// route    POST /api/user/logout
// @access  public
const logoutUser = asyncHandler((req, res) => {
  res.status(200).json({ message: "Logout User" })
})

// @desc    Get user profile
// route    GET /api/user/profile
// @access  Private
const getUserProfile = asyncHandler((req, res) => {
  res.status(200).json({ message: "Get Profile" })
})

// @desc    Update user profile
// route    PUT /api/user/profile
// @access  Private
const updateUserProfile = asyncHandler((req, res) => {
  res.status(200).json({ message: "Update Profile" })
})

export { authUser, getUserProfile, logoutUser, registerUser, updateUserProfile }
