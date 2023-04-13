import { IChallengeEntity } from "./challengeEntity";

export interface IChallengeRepository {
  createChallenge(): Promise<IChallengeEntity>
}