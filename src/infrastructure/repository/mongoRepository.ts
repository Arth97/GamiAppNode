import { IChallengeEntity } from '../../domain/challenges/challengeTypeA/challengeAEntity'
import { IChallengeRepository } from '../../domain/challenges/challengeTypeA/challengeARepository'
import { IGameEntity } from '../../domain/game/gameEntity'
import { IGameRepository } from '../../domain/game/gameRepository'
import { IUserEntity } from '../../domain/user/userEntity'
import { IUserRepository } from '../../domain/user/userRepository'
import GameModel from '../model/gameModel'
import UserModel from '../model/userModel'
import ChallengeModel from '../model/challengeModel'

/**
*   USER REPOSITORY
*/
class MongoUserRepository implements IUserRepository {
  async getOneUser (usrname: string): Promise<IUserEntity> {
    try {
      const user = await UserModel.findOne({ username: usrname }).exec()
      return user
    } catch (err) {
      console.log('err', err)
      // Or internal server error? TODO: check
      throw new Error(`Can not find user with username: ${usrname}`)
    }
  }

  async createNewUser (user: IUserEntity): Promise<IUserEntity> {
    try {
      const userCreated = await UserModel.create(user)
      return userCreated
    } catch (err) {
      console.log('err', err)
      throw new Error('Internal server error')
    }
  }

  async deleteOneUser (usrname): Promise<boolean> {
    try {
      const { deletedCount } = await UserModel.deleteOne({ username: usrname })
      return (deletedCount !== 0)
    } catch (err) {
      console.log('err', err)
      throw new Error('Internal server error')
    }
  }
}

/**
*   GAME REPOSITORY
*/
class MongoGameRepository implements IGameRepository {
  getAllGames (): Promise<IGameEntity[]> {
    try {
      const allGames = GameModel.find()
      return allGames
    } catch (err) {
      console.log('err', err)
      throw new Error('Internal server error')
    }
  }

  startNewGame (gameId): Promise<IGameEntity> {
    try {
      const game = GameModel.findOne({ _id: gameId })
      return game
    } catch (err) {
      console.log('err', err)
      throw new Error('Internal server error')
    }
  }

  createNewGame (game): Promise<IGameEntity> {
    try {
      const createdGame = GameModel.create(game)
      return createdGame
    } catch (err) {
      console.log('err', err)
      throw new Error('Internal server error')
    }
  }
}

/**
*   CHALLENGE REPOSITORY
*/
class MongoChallengeRepository implements IChallengeRepository {
  getAllChallenges (): Promise<IChallengeEntity[]> {
    let challenges
    ChallengeModel.find(/* Parameters TBD */)
      .then((res) => { challenges = res })
      .catch((err) => { throw err })
    return challenges
  }

  getAllChallengesByType (tpe): Promise<IChallengeEntity[]> {
    let challenges
    ChallengeModel.find({ type: tpe })
      .then((res) => { challenges = res })
      .catch((err) => { throw err })
    return challenges
  }

  createChallenge (): Promise<IChallengeEntity> {
    let createdChallenge
    ChallengeModel.create(/* Parameters TBD */)
      .then((res) => { createdChallenge = res })
      .catch((err) => { throw err })
    return createdChallenge
  }

  updateChallenge (): Promise<IChallengeEntity> {
    let updatedChallenge
    ChallengeModel.updateOne(/* Parameters TBD */)
      .then((res) => { updatedChallenge = res })
      .catch((err) => { throw err })
    return updatedChallenge
  }

  deleteChallenge (): Promise<boolean> {
    let response
    ChallengeModel.deleteOne(/* Parameters TBD */)
      .then((res) => { response = res })
      .catch((err) => { throw err })
    return response
  }
}

export {
  MongoUserRepository,
  MongoGameRepository,
  MongoChallengeRepository
}
