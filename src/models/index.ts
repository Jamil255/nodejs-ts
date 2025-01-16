import mongoose, { Schema, Document } from 'mongoose'

interface IUser extends Document {
  name: string
  email: string
  password: string
  student: mongoose.Schema.Types.ObjectId
  createdAt?: Date
}

const UserSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'student',
    },
    password: { type: String, required: true },
  },
  { timestamps: true }
)

const User = mongoose.model<IUser>('User', UserSchema)

export default User
