const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
require('dotenv').config()

const authRoutes = require('./routes/authRoutes')

const app = express()

app.use(helmet())
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected!'))
  .catch((err) => console.log('❌ Error:', err))

app.use('/api/auth', authRoutes)

app.get('/api/health', (req, res) => {
  res.json({
    message: 'API chal rahi hai!',
    routes: [
      'POST /api/auth/signup',
      'POST /api/auth/login',
      'GET /api/auth/profile',
      'PUT /api/auth/profile',
      'PATCH /api/auth/profile'
    ]
  })
})

app.use((req, res) => {
  res.status(404).json({
    message: 'Route nahi mili!',
    method: req.method,
    path: req.originalUrl,
    hint: 'Use /api/auth/signup, /api/auth/login, /api/auth/profile (GET/PUT/PATCH)'
  })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`)
  console.log('📌 Routes: POST /api/auth/signup, POST /api/auth/login, GET/PUT/PATCH /api/auth/profile')
})
