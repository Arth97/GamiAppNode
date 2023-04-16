import { Schema, model } from 'mongoose'
import { IGameEntity } from '../../domain/game/gameEntity'

const GameSchema = new Schema<IGameEntity>({
  uuid: {
    type: String,
    unique: true
  },
  dificulty: Number,
  time: Number,
  hints: Number,
  challenges: [Number],
  challengeTypes: Number
})

const GameModel = model<IGameEntity>('game', GameSchema)

export default GameModel
