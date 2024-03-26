import mongoose from "mongoose"

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL)
    console.log("Connected To DataBase Successfully")
  } catch (error) {
    console.log("Error Connecting to DataBase", error)
  }
}

export default connectToMongoDB
