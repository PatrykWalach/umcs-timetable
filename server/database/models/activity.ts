import mongoose from 'mongoose'

const activitySchema = new mongoose.Schema({
  group: { type: Number },
  room: { type: String },
  subject: { type: String },
  teachers: {
    required: true,
    type: [String],
  },
  students: { required: true, type: [String] },
  weekday: {
    type: String,
    enum: [''],
  },
  startTime: { type: Number },
  endTime: { type: Number },
  type: { type: String, enum: [''] },
})

export const activityModel = mongoose.model('activity', activitySchema)
