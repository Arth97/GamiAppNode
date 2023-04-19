import { IChallengeEntity } from '../../domain/challenges/challengeEntity'
import { IChallengeRepository } from '../../domain/challenges/challengeRepository'
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
// #region
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
// #endregion

/**
*   GAME REPOSITORY
*/
// #region
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
// #endregion

/**
*   CHALLENGE REPOSITORY
*/
// #region
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

  createChallenge (challenge): Promise<IChallengeEntity> {
    return ChallengeModel.create(challenge)
      .then((createdChallenge) => { return createdChallenge })
      .catch((err) => { throw err })
  }

  updateChallenge (): Promise<unknown> {
    return ChallengeModel.updateOne(/* Parameters TBD */)
      .then((updatedChallenge) => { return updatedChallenge })
      .catch((err) => { throw err })
  }

  deleteChallenge (challengeId): Promise<unknown> {
    return ChallengeModel.deleteOne({ _id: challengeId })
      .then((res) => { console.log('typ2', typeof res) })
      .catch((err) => { throw err })
  }
}
// #endregion

export {
  MongoUserRepository,
  MongoGameRepository,
  MongoChallengeRepository
}
