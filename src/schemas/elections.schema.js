import mongoose, { Schema } from 'mongoose'

const schema = {
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  date_creation: {
    type: Date,
    default: Date.now
  },
  active: {
    type: Boolean,
    default: true
  }
}

const ELECTION_SCHEMA = Schema(schema)
export default mongoose.model('Elections', ELECTION_SCHEMA)
