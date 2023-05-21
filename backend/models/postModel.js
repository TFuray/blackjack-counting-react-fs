import mongoose from "mongoose"

const postSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    dog: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Dog",
    },
    post: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Post = mongoose.model("Post", postSchema)

export default Post
