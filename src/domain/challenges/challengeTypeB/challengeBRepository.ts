import { IChallengeEntity } from './challengeBEntity'

export interface IChallengeRepository {
  getAllChallenges(): Promise<IChallengeEntity[]>
  getAllChallengesByType(type: number): Promise<IChallengeEntity[]>
  createChallenge(): Promise<IChallengeEntity>
  updateChallenge(): Promise<IChallengeEntity>
  deleteChallenge(): Promise<boolean>
}
