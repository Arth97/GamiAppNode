import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'

import userRoutes from './infrastructure/routes/userRoutes'
import gameRoutes from './infrastructure/routes/gameRoutes'
import dbInit from './infrastructure/DB/mongo'
import challengeRoutes from './infrastructure/routes/challengeRoutes'

dotenv.config()

const PORT = process.env.PORT || 3001
const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/users', userRoutes)
app.use('/api/games', gameRoutes)
app.use('/api/challenges', challengeRoutes)

dbInit()
app.listen(PORT, () => {
  console.log('🚀 Listening on port:', PORT)
})
