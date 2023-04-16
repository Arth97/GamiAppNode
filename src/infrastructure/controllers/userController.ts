import { UserUseCase } from '../../application/userUseCase'

export class UserController {
  constructor (private readonly _userUseCase: UserUseCase) {
    this._userUseCase = _userUseCase
  }

  public getOneUser = (req, res) => {
    try {
      const user = this._userUseCase.getOneUser(req.query)
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
    console.log('TEST')
    console.log('req.body', req.body)
    try {
      const user = await this._userUseCase.createNewUser(req.body)
      console.log('USER', user)
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

  public deleteOneUser = (req, res) => {
    try {
      // const user = _userUseCase.
      res.status(200).send({
        status: 'OK',
        data: {}
      })
    } catch (err) {
      res.status(err?.status || 500).send({
        status: 'FAILED',
        data: { error: err?.message || err }
      })
    }
  }
}
