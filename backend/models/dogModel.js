import mongoose from "mongoose"

const dogSchema = mongoose.Schema(
  {
    user: {
      type: String,
      required: true,
    },
    dogName: {
      type: String,
      required: true,
    },
    dogBreed: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
)

const Dog = mongoose.model("Dog", dogSchema)

export default Dog
