import { ChallengeValue } from '../challengeValue'
import { IChallengeBEntity } from './challengeBEntity'

export class ChallengeBValue extends ChallengeValue implements IChallengeBEntity {
  points: number
  type: string
  question: string
  answer: boolean

  constructor (points: number, type: string, question: string, answer: boolean) {
    super(points, type, question)
    this.answer = answer
  }
}
