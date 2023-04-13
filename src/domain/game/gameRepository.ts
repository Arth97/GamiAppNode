import { IGameEntity } from "./gameEntity";

export interface IGameRepository {
  startNewGame(game): Promise<IGameEntity>
}