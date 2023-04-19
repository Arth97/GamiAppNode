import { Schema, model } from 'mongoose'
import { IGameEntity } from '../../domain/game/gameEntity'

const GameSchema = new Schema<IGameEntity>({
  time: Number,
  hints: Number,
  challengesNumber: [Number]
})

const GameModel = model<IGameEntity>('game', GameSchema)

export default GameModel
