import { ChallengeUseCase } from '../../application/challengeUseCase'

export class ChallengeController {
  constructor (private readonly _challengeUseCase: ChallengeUseCase) {
    this._challengeUseCase = _challengeUseCase
  }

  public getAllChallenges = async (req, res) => {
    try {
      const allChallenges = await this._challengeUseCase.getAllChallenges()
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
    this._challengeUseCase.createChallenge(req.body)
      .then((challenge) => {
        res.status(200).send({
          status: 'OK',
          data: { data: challenge }
        })
      })
      .catch((err) => {
        res.status(err?.status || 500).send({
          status: 'FAILED',
          data: { error: err?.message || err }
        })
      })
  }

  public deleteChallenge = (req, res) => {
    this._challengeUseCase.deleteChallenge(req.params)
      .then((deletedChallenge) => {
        res.status(200).send({
          status: 'OK',
          data: { data: deletedChallenge }
        })
      })
      .catch((err) => {
        res.status(err?.status || 500).send({
          status: 'FAILED',
          data: { error: err?.message || err }
        })
      })
  }
}
