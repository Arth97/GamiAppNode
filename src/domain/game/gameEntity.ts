import { IChallengeEntity } from '../challenge/challengeEntity'

export class IGameEntity {
  dificulty: number
  time: number
  hints: number
  challenge: IChallengeEntity // TODO: Check if arrays
}
