import cookieParser from "cookie-parser"
import dotenv from "dotenv"
import express from "express"
import connectDB from "./config/db.js"
import { errorHandler, notFound } from "./middleware/errorMiddleware.js"
import cardsRoutes from "./routes/cardsRoutes.js"
import userRoutes from "./routes/userRoutes.js"
dotenv.config()
const port = process.env.port || 5000

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cookieParser())

app.use("/api/users", userRoutes)
app.use("/api/cards", cardsRoutes)

app.get("/", (req, res) => res.send("Server is Ready"))

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))
