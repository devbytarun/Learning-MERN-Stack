const jwt = require('jsonwebtoken')

const protect = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization || ''
    const match = authHeader.match(/^Bearer\s+(.+)$/i)
    const token = match?.[1]?.trim()
    
    if (!token) {
      return res.status(401).json({
        error: "Token nahi hai — login karo!",
        hint: "Authorization header format: Bearer <token>"
      })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    
    req.user = decoded
    
    next()

  } catch (err) {
    res.status(401).json({ error: "Token invalid hai!" })
  }
}

module.exports = { protect }
