import { v4 as uuid } from 'uuid'

import { IChallengeEntity } from './challengeEntity'

export class ChallengeValue implements IChallengeEntity {
  points: number;
  type: number;

  constructor(points: number, type: number) {
    this.points = points
    this.type = type
  }
}