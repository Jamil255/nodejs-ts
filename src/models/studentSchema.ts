import mongoose, { Schema } from 'mongoose'

interface IStudent extends Document {
  className: string
  teacherName: string
  courseName: string
  rollNo: number
}

const StudentSchema: Schema = new Schema(
  {
    ClassName: {
      type: 'string',
      require: true,
    },
    teacherName: {
      type: 'string',
      require: true,
    },
    courseName: {
      type: 'string',
      require: true,
    },
    rollNo: {
      type: 'number',
      require: true,
    },
  },
  { timestamps: true }
)

const studentModel = mongoose.model<IStudent>('student', StudentSchema)

export default studentModel
