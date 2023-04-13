import { v4 as uuid } from 'uuid'

import { IChallengeEntity } from "../challenge/challengeEntity";
import { IGameEntity } from "./gameEntity";

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