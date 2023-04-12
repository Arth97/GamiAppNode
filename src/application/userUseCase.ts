
import { IUserEntity } from "../domain/userEntity";
import { IUserRepository } from "../domain/userRepository";
import { UserValue } from "../domain/userValue";

export class UserUseCase {

  constructor (private readonly _userRepository: IUserRepository) { }

  public async getOneUser(username: String) {
    try {
      const user = await this._userRepository.getOneUser(username)
      return user
    } catch (err) {
      throw err
    }
  }

  public async createNewUser(username: String, email: String) {
    try {
      const userToInsert: IUserEntity = new UserValue(username, email)
      const newUser = this._userRepository.createNewUser(userToInsert)
      return newUser
    } catch (err) {
      throw err
    }
  }

  public async deleteOneUser(userId: number) {
    try {
      const deletedUser = this._userRepository.deleteOneUser(userId)
      return deletedUser
    } catch (err) {
      throw err
    }
  }
}