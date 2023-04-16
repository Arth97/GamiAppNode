import express from 'express'
import { GameController } from '../controllers/gameController'
import { MongoGameRepository } from '../repository/mongoRepository'
import { GameUseCase } from '../../application/gameUseCase'
import { GameValue } from '../../domain/game/gameValue'

const router = express.Router()

const gameRepo = new MongoGameRepository()
const gameValue = new GameValue()
const gameUseCase = new GameUseCase(gameRepo, gameValue)
const gameController = new GameController(gameUseCase)

router.get('/', gameController.startNewGame)
router.get('/:gameId', gameController.startNewGame)
router.post('/', gameController.createNewGame)

export default router
