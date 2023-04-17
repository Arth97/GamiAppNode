import { IGameEntity } from './gameEntity'

export class GameValue /* implements IGameEntity */ {
  game: IGameEntity

  constructor () {
    this.game = new IGameEntity()
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
  dificulty: number;
  time: number;
  hints: number;
  challenge: IChallengeEntity;

  constructor(dificulty: number, time: number, hints: number, challenge: IChallengeEntity) {
    this.dificulty = dificulty
    this.time = time
    this.hints = hints
    this.challenge = challenge
  }
}
*/
