import { IGameEntity } from './gameEntity'

export class GameBuilder {
  game: IGameEntity

  constructor () {
    this.game = new IGameEntity()
  }

  setTime (time) {
    this.game.time = time
    return this
  }

  setHints (hints) {
    this.game.hints = hints
    return this
  }

  setChallenges (challengesNumber) {
    this.game.challengesNumber = challengesNumber
    return this
  }

  setChallengeType (type) {
    this.game.challengeType = type
    return this
  }

  build () {
    return this.game
  }
}

export class GameValue implements IGameEntity {
  time: number
  hints: number
  challengesNumber: number

  constructor (time: number, hints: number, challengesNumber: number) {
    this.time = time
    this.hints = hints
    this.challengesNumber = challengesNumber
  }
}
