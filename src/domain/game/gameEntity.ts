import { IChallengeEntity } from "../challenge/challengeEntity";

export class IGameEntity {
  dificulty: number
  time: number
  hints: number
  challenge: IChallengeEntity
}