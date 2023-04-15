
import { IUserEntity } from '../domain/user/userEntity'
import { IUserRepository } from '../domain/user/userRepository'
import { UserValue } from '../domain/user/userValue'

export class UserUseCase {
  constructor (private readonly _userRepository: IUserRepository) { }

  public async getOneUser (username: string) {
    try {
      const user = await this._userRepository.getOneUser(username)
      return user
    } catch (err) {
      throw err
    }
  }

  public async createNewUser (username: string, email: string) {
    try {
      const userToInsert: IUserEntity = new UserValue(username, email)
      const newUser = this._userRepository.createNewUser(userToInsert)
      return newUser
    } catch (err) {
      throw err
    }
  }

  public async deleteOneUser (userId: number) {
    try {
      const deletedUser = this._userRepository.deleteOneUser(userId)
      return deletedUser
    } catch (err) {
      throw err
    }
  }
}
