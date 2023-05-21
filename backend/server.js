import dotenv from "dotenv"
import express from "express"
import connectDB from "./config/db.js"
import cookieParser from "cookie-parser"
import { errorHandler, notFound } from "./middleware/errorMiddleware.js"
import userRoutes from "./routes/userRoutes.js"
import dogRoutes from './routes/dogRoutes.js'
dotenv.config()
const port = process.env.port || 5000

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cookieParser())

app.use("/api/users", userRoutes)
app.use("/api/dog", dogRoutes)

app.get("/", (req, res) => res.send("Server is Ready"))

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))
