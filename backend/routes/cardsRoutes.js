import express from "express"
import {
  dealHand,
  drawOne,
  shuffleCards,
} from "../controllers/cardsController.js"

const router = express.Router()

router.get("/", drawOne)
router.get("/dealHand", dealHand)
router.get("/shuffleCards", shuffleCards)

export default router
