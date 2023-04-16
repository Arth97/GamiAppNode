import { UserUseCase } from '../../application/userUseCase'

export class UserController {
  constructor (private readonly _userUseCase: UserUseCase) {
    this._userUseCase = _userUseCase
  }

  public getOneUser = async (req, res) => {
    try {
      const user = await this._userUseCase.getOneUser(req.params)
      res.status(200).send({
        status: 'OK',
        data: { data: user }
      })
    } catch (err) {
      res.status(err?.status || 500).send({
        status: 'FAILED',
        data: { error: err?.message || err }
      })
    }
  }

  public createNewUser = async (req, res) => {
    try {
      const user = await this._userUseCase.createNewUser(req.body)
      res.status(200).send({
        status: 'OK',
        data: { data: user }
      })
    } catch (err) {
      res.status(err?.status || 500).send({
        status: 'FAILED',
        data: { error: err?.message || err }
      })
    }
  }

  public deleteOneUser = async (req, res) => {
    try {
      const deletedUser = await this._userUseCase.deleteOneUser(req.params)
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
