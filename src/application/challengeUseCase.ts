import { IChallengeEntity } from "../domain/challenge/challengeEntity";
import { IChallengeRepository } from "../domain/challenge/challengeRepository";

export class ChallengeUseCase {
  
  constructor(private readonly _challengeRepository: IChallengeRepository) { }

  public async getChallengeById(): Promise<IChallengeEntity> {
    try {
      const challenge = this._challengeRepository.getChallengeById(/*Parameters TBD*/)
      return challenge
    } catch (err) {
      throw err
    }
  }

  public async createChallenge(): Promise<IChallengeEntity> {
    try {
      const createdChallenge = this._challengeRepository.createChallenge(/*Parameters TBD*/)
      return createdChallenge
    } catch (err) {
      throw err
    }
  }

  public async updateChallenge(): Promise<IChallengeEntity> {
    try {
      const updatedChallenge = this._challengeRepository.updateChallenge(/*Parameters TBD*/)
      return updatedChallenge
    } catch (err) {
      throw err
    }
  }

  public async deleteChallenge(): Promise<Boolean> {
    try {
      return this._challengeRepository.deleteChallenge(/*Parameters TBD*/)
    } catch (err) {
      throw err
    }
  }

}