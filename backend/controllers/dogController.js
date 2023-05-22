import asyncHandler from "express-async-handler"
import Dog from "../models/DogModel.js"
import Post from "../models/postModel.js"

// @desc    add new dog
// route    POST /api/dog/
// @access  private
const addDog = asyncHandler(async (req, res) => {
  const { user, dogName, dogBreed } = req.body

  const dog = await Dog.create({ user, dogName, dogBreed })
  if (dog) {
    res.status(200).json({
      user: dog.user,
      dogName: dog.dogName,
      dogBreed: dog.dogBreed,
    })
  } else {
    res.status(400)
    throw new Error("Invalid dog data")
  }
})

// @desc    get all dogs
// route    GET /api/dog
// @access  private
const getDogs = asyncHandler(async (req, res) => {
  const dogs = await Dog.find({ user: req.user.name })
  console.log(dogs)
  res.status(200).json(dogs)
})

// @desc    add new post
// route    POST /api/dog/post
// @access  Private
const addPost = asyncHandler(async (req, res) => {
  const { dog, post } = req.body
  const newPost = await Post.create({ dog, post })
  if (newPost) {
    res.status(200).json({
      dog: newPost.dog,
      post: newPost.post,
    })
  } else {
    res.status(400)
    throw new Error("Invalid post data")
  }
})

// @desc    get all posts
// route    GET /api/dog/post
// @access  Private
const getPost = asyncHandler(async (req, res) => {
  // const posts = await Post.find({})
  console.log(req)
})

export { addDog, addPost, getDogs, getPost }
