import express from 'express'
import * as dotenv from 'dotenv'

dotenv.config()

import userRoutes from './infrastructure/routes/userRoutes'

const app = express()

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  // console.log(process.env)
  console.log('🚀Listening on port:', PORT)
})

app.use('/api/users', userRoutes)
