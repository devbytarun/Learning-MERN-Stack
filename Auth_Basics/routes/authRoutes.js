const express = require('express')
const router = express.Router()
const { signup, login, getMe, updateProfile } = require('../controllers/authController')

const { protect } = require('../middleware/authMiddleware')

router.get('/profile', protect, getMe)
router.put('/profile', protect, updateProfile)
router.patch('/profile', protect, updateProfile)
router.get('/me', protect, getMe) // alias
router.put('/update', protect, updateProfile) // backward compatibility
router.post('/signup', signup)
router.post('/login', login)

module.exports = router  
