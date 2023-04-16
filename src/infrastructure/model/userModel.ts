import { Schema, model } from 'mongoose'
import { IUserEntity } from '../../domain/user/userEntity'

const UserSchema = new Schema<IUserEntity>({
  uuid: {
    type: String,
    unique: true
  },
  username: {
    type: String
    // unique: true
  },
  email: {
    type: String
    // unique: true
  }
})

const UserModel = model<IUserEntity>('User', UserSchema)

export default UserModel
