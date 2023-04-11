import express from 'express'

import userRoutes from './infrastructure/routes/userRoutes'

const app = express()

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log('🚀Listening on port:', PORT)
})

app.use('/api/users', userRoutes)
