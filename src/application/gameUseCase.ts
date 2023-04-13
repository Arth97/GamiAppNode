import { IGameRepository } from "../domain/game/gameRepository";
import { GameValue } from "../domain/game/gameValue";


export class GameUseCase {

  constructor(
    private readonly _gameRepository: IGameRepository,
    private gameValue: GameValue
  ) { }

  // TODO: Maybe use concrete builder to do different type of challenges
  public async execute(gameData) {
    const { dificulty, time, hints, challenge } = gameData
  
    const game = this.gameValue
      .setDificutly(dificulty)
      .setTime(time)
      .setHints(hints)
      .setChallenge(challenge)
      .build()

    const createdGame = await this._gameRepository.startNewGame(game);
    return createdGame
  }
}