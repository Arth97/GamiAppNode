import { IGameEntity } from "./gameEntity";

export interface IGameRepository {
  startNewGame(): Promise<IGameEntity>
}