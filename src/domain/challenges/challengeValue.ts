import { IChallengeEntity } from './challengeEntity'

export abstract class ChallengeValue implements IChallengeEntity {
  points: number
  type: string
  question: string

  constructor (
    points: number,
    type: string,
    question: string
  ) {
    this.points = points
    this.type = type
    this.question = question
  }
}
