const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/User");
const product = require("./models/product");
require("dotenv").config();

const app = express();
app.use(express.json());

// MongoDB Connect
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected!"))
  .catch((err) => console.log("❌ Error:", err));

app.get("/", (req, res) => {
  res.json({ message: "Server + DB dono chal rahe hain!" });
});

app.post("/api/users", async (req, res) => {
  const { name, email, age, password } = req.body;

  const newUser = new User({ name, email, age, password });
  await newUser.save();

  res.status(201).json({ message: "User saved!", user: newUser });
});

app.post("/api/products", async (req, res) => {
  const { title, price, inStock } = req.body;

  const newProduct = new product({ title, price, inStock });
  await newProduct.save();

  res.status(201).json({ message: "Product saved!", product: newProduct });
});

app.put("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  const updatedProduct = await product.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  res.json({ message: "Product updated!", product: updatedProduct });
});

app.delete('/api/products/:id', async (req, res) => {
  const { id } = req.params;
  await product.findByIdAndDelete(id);
  res.json({ message: 'Product deleted!' });
});

app.get("/api/products", async (req, res) => {
  const products = await product.find();
  res.json(products);
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
