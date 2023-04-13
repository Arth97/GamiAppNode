import { IChallengeEntity } from "../domain/challenge/challengeEntity";
import { IChallengeRepository } from "../domain/challenge/challengeRepository";

export class ChallengeUseCase {
  
  constructor(private readonly _challengeRepository: IChallengeRepository) { }

  public async createChallenge(): Promise<IChallengeEntity> {
    try {
      const createdChallenge = this._challengeRepository.createChallenge(/*Parameters TBD*/)
      return createdChallenge
    } catch (err) {
      throw err
    }
  }

}