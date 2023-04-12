import { v4 as uuid } from 'uuid'
import { IUserEntity } from './userEntity';

export class UserValue implements IUserEntity {
  uuid: String
  username: String
  email: String

  constructor (username: String, email: String) {
    this.uuid = uuid()
    this.username = username
    this.email = email
  }
}

