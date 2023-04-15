import { v4 as uuid } from 'uuid'

import { IUserEntity } from './userEntity'

export class UserValue implements IUserEntity {
  uuid: string
  username: string
  email: string

  constructor (username: string, email: string) {
    this.uuid = uuid()
    this.username = username
    this.email = email
  }
}
