import { IGameEntity } from '../../domain/game/gameEntity'
import { IGameRepository } from '../../domain/game/gameRepository'
import { IUserEntity } from '../../domain/user/userEntity'
import { IUserRepository } from '../../domain/user/userRepository'
import UserModel from '../model/userModel'

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
    throw new Error('Method not implemented.')
  }

  deleteOneUser (userId: number): Promise<boolean> {
    throw new Error('Method not implemented.')
  }
}

class MongoGameRepository implements IGameRepository {
  startNewGame (game: any): Promise<IGameEntity> {
    throw new Error('Method not implemented.')
  }
}

export default {
  MongoUserRepository,
  MongoGameRepository
}
