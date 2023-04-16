import { IGameRepository } from '../domain/game/gameRepository'
import { GameValue } from '../domain/game/gameValue'

export class GameUseCase {
  constructor (
    private readonly _gameRepository: IGameRepository,
    private readonly _gameValue: GameValue
  ) {
    this._gameRepository = _gameRepository
    this._gameValue = _gameValue
  }

  public async getAllGames () {
    try {
      const allGames = await this._gameRepository.getAllGames()
      return allGames
    } catch (err) {
      console.log('err', err)
      throw err
    }
  }

  public async startNewGame (gameId) {
    try {
      const createdGame = await this._gameRepository.startNewGame(gameId)
      return createdGame
    } catch (err) {
      console.log('err', err)
      throw err
    }
  }

  // TODO: Maybe use concrete builder to do different type of challenges
  public async createNewGame (gameData) {
    try {
      const { dificulty, time, hints, challenges, challengeTypes } = gameData
      const game = this._gameValue
        .setDificutly(dificulty)
        .setTime(time)
        .setHints(hints)
        .setChallenges(challenges)
        .setChallengeTypes(challengeTypes)
        .build()

      const createdGame = await this._gameRepository.createNewGame(game)
      return createdGame
    } catch (err) {
      console.log('err', err)
      throw err
    }
  }
}
