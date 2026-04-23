const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const rateLimit = require('express-rate-limit')

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,  // 15 minutes
  max: 100                     // 100 requests max
})

const productRoutes = require('./routes/productRoutes');

const app = express();  

// phir middlewares
app.use(helmet())
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(limiter)

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected!'))
  .catch((err) => console.log('❌ Error:', err));

app.use('/api/products', productRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Route nahi mili!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));