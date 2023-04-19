import { IChallengeEntity } from '../domain/challenges/challengeEntity'
import { IChallengeRepository } from '../domain/challenges/challengeRepository'

export class ChallengeUseCase {
  constructor (private readonly _challengeRepository: IChallengeRepository) {
    this._challengeRepository = _challengeRepository
  }

  public getAllChallenges (): Promise<IChallengeEntity[]> {
    let challenges
    this._challengeRepository.getAllChallenges(/* Parameters TBD */)
      .then((res) => { challenges = res })
      .catch((err) => { throw err })
    return challenges
  }

  public getAllChallengesByType (type): Promise<IChallengeEntity[]> {
    let challenges
    this._challengeRepository.getAllChallengesByType(type)
      .then((res) => { challenges = res })
      .catch((err) => { throw err })
    return challenges
  }

  public createChallenge (): Promise<IChallengeEntity> {
    let createdChallenge
    this._challengeRepository.createChallenge(/* Parameters TBD */)
      .then((res) => { createdChallenge = res })
      .catch((err) => { throw err })
    return createdChallenge
  }

  public updateChallenge (): Promise<IChallengeEntity> {
    let updatedChallenge
    this._challengeRepository.updateChallenge(/* Parameters TBD */)
      .then((res) => { updatedChallenge = res })
      .catch((err) => { throw err })
    return updatedChallenge
  }

  public async deleteChallenge (challengeId): Promise<boolean> {
    try {
      return await this._challengeRepository.deleteChallenge(/* Parameters TBD */)
    } catch (err) {
      console.log('err', err)
      throw err
    }
  }
}
