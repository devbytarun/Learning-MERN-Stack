const product = require('../models/product');

const getProducts = async (req, res) => {
  try {
    const products = await product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const { title, price, inStock } = req.body;
    const newProduct = new product({ title, price, inStock });
    await newProduct.save();
    res.status(201).json({ message: 'Product saved!', product: newProduct });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const updated = await product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Product nahi mila!' });
    res.status(200).json({ message: 'Updated!', product: updated });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const deleted = await product.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Product nahi mila!' });
    res.status(200).json({ message: 'Deleted!' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getProducts, createProduct, updateProduct, deleteProduct };