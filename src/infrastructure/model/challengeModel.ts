import { Schema, model } from 'mongoose'
import { IChallengeEntity } from '../../domain/challenge/challengeEntity'

const ChallengeSchema = new Schema<IChallengeEntity>({
  points: {
    type: Number,
    required: true
  },
  type: {
    type: Number,
    required: true
  }
})

const ChallengeModel = model('Challenge', ChallengeSchema)

export default ChallengeModel
