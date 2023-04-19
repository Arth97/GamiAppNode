import express from 'express'
import { ChallengeController } from '../controllers/challengeController'
import { MongoChallengeRepository } from '../repository/mongoRepository'
import { ChallengeUseCase } from '../../application/challengeUseCase'

const router = express.Router()

const challengeRepo = new MongoChallengeRepository()
const challengeUseCase = new ChallengeUseCase(challengeRepo)
const challengeController = new ChallengeController(challengeUseCase)

router.get('/', challengeController.getAllChallenges)
router.post('/', challengeController.createChallenge)
router.delete('/:challenge', challengeController.deleteChallenge)

export default router
