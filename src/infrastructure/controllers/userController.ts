import { UserUseCase } from '../../application/userUseCase'

export class UserController {
  constructor (private _userUseCase: UserUseCase) {
    this.getOneUser = this.getOneUser.bind(this)
  }

  public getOneUser = (req, res) => {
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

  public createNewUser = (req, res) => {

  }

  public deleteOneUser = (req, res) => {

  }
}
