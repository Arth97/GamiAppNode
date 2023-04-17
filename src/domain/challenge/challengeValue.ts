import { IChallengeEntity } from './challengeEntity'

export class ChallengeValue implements IChallengeEntity {
  points: number
  type: number

  constructor (points: number, type: number) {
    this.points = points
    this.type = type
  }
}
