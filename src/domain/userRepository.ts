import { IUserEntity } from './userEntity';

export interface IUserRepository {
  getOneUser(username: String): Promise<IUserEntity>
  createNewUser(user: IUserEntity): Promise<IUserEntity>
  deleteOneUser(userId: number): Promise<Boolean>
}