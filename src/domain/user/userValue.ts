import { IUserEntity } from './userEntity'

export class UserValue implements IUserEntity {
  username: string
  email: string
  points: number

  constructor (username: string, email: string, points: number) {
    this.username = username
    this.email = email
    this.points = points
  }
}
