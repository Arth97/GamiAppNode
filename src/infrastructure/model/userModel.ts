import { Schema, model } from 'mongoose'
import { IUserEntity } from '../../domain/user/userEntity'

const userSchema = new Schema<IUserEntity>({
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

const UserModel = model<IUserEntity>('User', userSchema)

export default UserModel
