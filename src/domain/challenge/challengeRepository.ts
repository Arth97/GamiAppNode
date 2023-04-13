import { IChallengeEntity } from "./challengeEntity";

export interface IChallengeRepository {
  getChallengeById(): Promise<IChallengeEntity>
  createChallenge(): Promise<IChallengeEntity>
  updateChallenge(): Promise<IChallengeEntity>
  deleteChallenge(): Promise<Boolean>
}