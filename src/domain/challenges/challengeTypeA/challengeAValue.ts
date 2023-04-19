import { IChallengeAEntity } from './challengeAEntity'
import { ChallengeValue } from '../challengeValue'

export class ChallengeAValue extends ChallengeValue implements IChallengeAEntity {
  points: number
  type: string
  question: string
  answer1: string
  answer2: string
  answer3: string
  answer4: string
  correctAnswer: string

  constructor (
    points: number,
    type: string,
    question: string,
    answer1: string,
    answer2: string,
    answer3: string,
    answer4: string,
    correctAnswer: string
  ) {
    super(points, type, question)
    this.answer1 = answer1
    this.answer2 = answer2
    this.answer3 = answer3
    this.answer4 = answer4
    this.correctAnswer = correctAnswer
  }
}
