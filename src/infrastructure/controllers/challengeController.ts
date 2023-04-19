import { ChallengeUseCase } from '../../application/challengeUseCase'

export class ChallengeController {
  constructor (private readonly _challengeUseCase: ChallengeUseCase) {
    this._challengeUseCase = _challengeUseCase
  }

  public getAllChallenges = (req, res) => {
    try {
      const allChallenges = this._challengeUseCase.getAllChallenges()
      res.status(200).send({
        status: 'OK',
        data: { data: allChallenges }
      })
    } catch (err) {
      res.status(err?.status || 500).send({
        status: 'FAILED',
        data: { error: err?.message || err }
      })
    }
  }

  public createChallenge = (req, res) => {
    try {
      const game = this._challengeUseCase.createChallenge()
      res.status(200).send({
        status: 'OK',
        data: { data: game }
      })
    } catch (err) {
      res.status(err?.status || 500).send({
        status: 'FAILED',
        data: { error: err?.message || err }
      })
    }
  }

  public deleteChallenge = async (req, res) => {
    try {
      const deletedUser = await this._challengeUseCase.deleteChallenge(req.params)
      res.status(200).send({
        status: 'OK',
        data: { data: deletedUser }
      })
    } catch (err) {
      res.status(err?.status || 500).send({
        status: 'FAILED',
        data: { error: err?.message || err }
      })
    }
  }
}
