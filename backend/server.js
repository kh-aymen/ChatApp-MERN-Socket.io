import express from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"
import cookieParser from "cookie-parser"

import connectToMongoDB from "./dataBase/connectToMongoDb.js"
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js" 
import userRoutes from "./routes/user.route.js"
import { app, server } from "./socket/socket.js"

dotenv.config()
const PORT = process.env.PORT || 5000

app.use(cookieParser()) 
dotenv.config()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }))
app.use(morgan("dev"))
app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

app.get("/", (req, res) => {
  res.send("Server Running")
})

app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/messages", messageRoutes)

server.listen(PORT, () => {
  connectToMongoDB()
  console.log(`Server running on http://localhost:${PORT}`)
})
