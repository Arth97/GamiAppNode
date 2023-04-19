import { Schema, model } from 'mongoose'

const ChallengeSchema = new Schema({
  points: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  question: {
    type: String,
    required: true
  },
  answer: Boolean,
  answer1: String,
  answer2: String,
  answer3: String,
  answer4: String,
  correctAnswer: String
})

const ChallengeModel = model('Challenge', ChallengeSchema)

export default ChallengeModel
