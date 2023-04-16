import { v4 as uuid } from 'uuid'

import { IGameEntity } from './gameEntity'

export class GameValue /* implements IGameEntity */ {
  game: IGameEntity

  constructor () {
    this.game = new IGameEntity()
    this.game.uuid = uuid()
  }

  setDificutly (dificulty) {
    this.game.dificulty = dificulty
    return this
  }

  setTime (time) {
    this.game.time = time
    return this
  }

  setHints (hints) {
    this.game.hints = hints
    return this
  }

  setChallenges (challenges) {
    this.game.challenges = challenges
    return this
  }

  setChallengeTypes (challengeTypes) {
    this.game.challengeTypes = challengeTypes
    return this
  }

  build () {
    return this.game
  }
}

/*  Without builder
export class GameValue implements IGameEntity {
  uuid: string
  dificulty: number;
  time: number;
  hints: number;
  challenge: IChallengeEntity;

  constructor(dificulty: number, time: number, hints: number, challenge: IChallengeEntity) {
    this.uuid = uuid()
    this.dificulty = dificulty
    this.time = time
    this.hints = hints
    this.challenge = challenge
  }
}
*/
