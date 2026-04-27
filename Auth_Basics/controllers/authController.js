const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')



// Signup
const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body

    // 1. Check karo user already exist karta hai?
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({ error: "Email already registered!" })
    }

    // 2. Password hash karo
    const hashedPassword = await bcrypt.hash(password, 10)

    // 3. User save karo
    const newUser = new User({ name, email, password: hashedPassword })
    await newUser.save()

    res.status(201).json({ message: "User registered!", user: { name, email } })

  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}





// Login
const login = async (req, res) => {
  try {
    const { email, password } = req.body

    // 1. User dhundho
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(404).json({ error: "User nahi mila!" })
    }

    // 2. Password check karo
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(400).json({ error: "Password galat hai!" })
    }

    // 3. JWT token banao
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    )

    res.json({ message: "Login successful!", token })

  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

// GET /api/auth/me — apna poora data
const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password')
    if (!user) {
      return res.status(404).json({ error: "User nahi mila!" })
    }
    res.json(user)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}


const updateProfile = async (req, res) => {
  try {
    const { name, email } = req.body
    const updates = {}

    if (typeof name !== 'undefined') updates.name = name
    if (typeof email !== 'undefined') updates.email = email

    if (Object.keys(updates).length === 0) {
      return res.status(400).json({ error: "Name ya email bhejo update ke liye!" })
    }

    if (updates.email) {
      const existingUser = await User.findOne({ email: updates.email })
      if (existingUser && existingUser._id.toString() !== req.user.id) {
        return res.status(400).json({ error: "Ye email already use ho rahi hai!" })
      }
    }

    const user = await User.findByIdAndUpdate(
      req.user.id,
      updates,
      { new: true, runValidators: true }
    ).select('-password')

    if (!user) {
      return res.status(404).json({ error: "User nahi mila!" })
    }

    res.json({ message: "Profile updated!", user })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

module.exports = { signup, login, getMe, updateProfile }

