import { IGameRepository } from '../domain/game/gameRepository'
import { GameBuilder, GameValue } from '../domain/game/gameValue'
import { GameDirector } from './gameDirector'

export class GameUseCase {
  constructor (
    private readonly _gameRepository: IGameRepository,
    private readonly _gameValue: GameValue,
    private readonly _gameDirector: GameDirector
  ) {
    this._gameRepository = _gameRepository
    this._gameValue = _gameValue
    this._gameDirector = _gameDirector
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

  public startNewGame (gameType, challengesNumber) {
    let game

    const gameBuilder = new GameBuilder()
    this._gameDirector.setBuilder(gameBuilder)

    if (gameType === 'buildTimedHintsQuestions') { game = this._gameDirector.buildTimedHintsQuestions(challengesNumber) }
    if (gameType === 'buildTimedHintsTrueFalse') { game = this._gameDirector.buildTimedHintsTrueFalse(challengesNumber) }
    if (gameType === 'buildTimedQuestions') { game = this._gameDirector.buildTimedQuestions(challengesNumber) }
    if (gameType === 'buildTimedTrueFalse') { game = this._gameDirector.buildTimedTrueFalse(challengesNumber) }
    if (gameType === 'buildHintsQuestions') { game = this._gameDirector.buildHintsQuestions(challengesNumber) }
    if (gameType === 'buildHintsTrueFalse') { game = this._gameDirector.buildHintsTrueFalse(challengesNumber) }

    return game
  }

  public createNewGame (gameData) {
    const { time, hints, challengesNumber } = gameData
    const game = new GameValue(time, hints, challengesNumber)
    return this._gameRepository.createNewGame(game)
      .then((res) => { return res })
      .catch((err) => { throw err })
  }
}
