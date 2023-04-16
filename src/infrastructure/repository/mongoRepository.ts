import { IGameEntity } from '../../domain/game/gameEntity'
import { IGameRepository } from '../../domain/game/gameRepository'
import { IUserEntity } from '../../domain/user/userEntity'
import { IUserRepository } from '../../domain/user/userRepository'
import UserModel from '../model/userModel'

/**
*   USER REPOSITORY
*/
class MongoUserRepository implements IUserRepository {
  getOneUser (usrname: string): Promise<IUserEntity> {
    try {
      const user = UserModel.findOne({ username: usrname })
      return user
    } catch (err) {
      throw new Error('Method not implemented.')
    }
  }

  createNewUser (user: IUserEntity): Promise<IUserEntity> {
    try {
      const userCreated = UserModel.create(user)
      return userCreated
    } catch (err) {
      throw new Error({
        status: 500,
        message: err?.message || err
      })
    }
  }

  deleteOneUser (userId: number): Promise<boolean> {
    throw new Error('Method not implemented.')
  }
}

/**
*   GAME REPOSITORY
*/
class MongoGameRepository implements IGameRepository {
  startNewGame (game: any): Promise<IGameEntity> {
    throw new Error('Method not implemented.')
  }
}

export {
  MongoUserRepository,
  MongoGameRepository
}
