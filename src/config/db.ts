import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
const connectDb = async () => {
  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI is not defined in the environment variables')
  }
  await mongoose.connect(process.env.MONGO_URI)
  console.log('mongodb connected!')
}

export default connectDb
