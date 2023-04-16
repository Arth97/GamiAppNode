import { GameUseCase } from '../../application/gameUseCase'

export class GameController {
  constructor (private _gameUseCase: GameUseCase) {
    this.startNewGame = this.startNewGame.bind(this)
  }

  public startNewGame = (req, res) => {
    try {
      const gameData = this._gameUseCase.startNewGame(req.body)
      res.status(200).send({
        status: 'OK',
        data: { data: gameData }
      })
    } catch (err) {
      res.status(err?.status || 500).send({
        status: 'FAILED',
        data: { error: err?.message || err }
      })
    }
  }
}
