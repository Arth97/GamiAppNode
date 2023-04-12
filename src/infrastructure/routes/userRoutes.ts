import express from 'express'

import { UserController } from '../controllers/userController'
import { UserUseCase } from '../../application/userUseCase'

const router = express.Router()

// const userRepo = new MongoRepository()
const userRepo = null
const userUseCase = new UserUseCase(userRepo)
const userController = new UserController(userUseCase)

router.get('/', userController.getOneUser)

export default router
