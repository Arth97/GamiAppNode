import { IChallengeEntity } from './challengeEntity'

export interface IChallengeRepository {
  getAllChallenges(): Promise<IChallengeEntity[]>
  getAllChallengesByType(type: number): Promise<IChallengeEntity[]>
  createChallenge(challenge): Promise<IChallengeEntity>
  updateChallenge(): Promise<unknown>
  deleteChallenge(challengeId): Promise<unknown>
}
