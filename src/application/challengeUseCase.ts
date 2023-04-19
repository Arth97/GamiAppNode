import { IChallengeEntity } from '../domain/challenges/challengeEntity'
import { ChallengeAValue } from '../domain/challenges/challengeTypeA/challengeAValue'
import { IChallengeRepository } from '../domain/challenges/challengeRepository'
import { ChallengeBValue } from '../domain/challenges/challengeTypeB/challengeBValue'

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

  public createChallenge (body): Promise<IChallengeEntity> {
    let challenge: unknown

    if (body.type === 'A') {
      const { points, type, question, answer1, answer2, answer3, answer4, correctAnswer } = body
      challenge = new ChallengeAValue(points, type, question, answer1, answer2, answer3, answer4, correctAnswer)
    } else if (body.type === 'B') {
      const { points, type, question, answer } = body
      challenge = new ChallengeBValue(points, type, question, answer)
      console.log('challenge', challenge)
    }

    return this._challengeRepository.createChallenge(challenge)
      .then((createdChallenge) => { return createdChallenge })
      .catch((err) => { throw err })
  }

  public updateChallenge (): Promise<unknown> {
    return this._challengeRepository.updateChallenge(/* Parameters TBD */)
      .then((updatedChallenge) => { return updatedChallenge })
      .catch((err) => { throw err })
  }

  public async deleteChallenge (challengeId): Promise<unknown> {
    return this._challengeRepository.deleteChallenge(challengeId)
      .then((res) => { return res })
      .catch((err) => { throw err })
  }
}
