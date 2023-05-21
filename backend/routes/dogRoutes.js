import express from "express"
import { addDog, getDogs, addPost, getPost } from "../controllers/dogController.js"
import { protect } from "../middleware/authMiddleware.js"

const router = express.Router()

router.route("/").get(protect, getDogs).post(protect, addDog)
router.route('/post').get(protect, getPost).post(protect, addPost)

export default router
