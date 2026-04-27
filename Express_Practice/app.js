const express = require('express')
const app = express()
app.use(express.json())

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

const authRouter = require('./routes/auth')
app.use('/auth', authRouter)


app.post('/api/register', (req, res) => {
  const name = req.body.name
  const email = req.body.email
  const age = req.body.age
  const password = req.body.password
  
  if (!name || !email || !age || !password) {
    return res.status(400).json({ error: "Saari fields chahiye" })
  }
  
  res.json({
    message: "User registered!",
    user: { name, email, age ,password:"*******"}
  })
})


const products = [
  { id: 1, name: "Phone", price: 999 },
  { id: 2, name: "Laptop", price: 1499 }
]


app.get('/api/products', (req, res) => {
  res.json(products)
})

app.get('/api/product/:id', (req, res) => {
  const id = Number(req.params.id)  // string → number
  const product = products.find(p => p.id === id)

  if (product) {
    res.json(product)
  } else {
    res.status(404).json({ error: "Product nahi mila" })
  }
})


app.use((req,res)=>{
    res.status(404).send("<h1>404 - Page nahi mila!</h1>");
})

app.listen(8080, () => {
  console.log("Express server chal raha hai port 8080 pe");
});
