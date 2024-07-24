const Product = require("../models/Product");

const getAllproduct = async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).json(products);
  } catch {
    return res.status(500).json({ message: "Request Failed" });
  }
};
const createProduct = async (req, res) => {
  try {
    const product = await new Product({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: req.body.image,
      address: req.body.address,
      buyed: req.body.buyed,
    });
    const saveProduct = await product.save();
    return res.status(200).json(saveProduct);
  } catch {
    return res.status(500).json({ message: "Request Failed" });
  }
};

const getProductbuId = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    } else {
      return res.status(200).json(product);
    }
  } catch {
    return res.status(500).json({ message: "Request Failed" });
  }
};

const updateProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    } else {
      return res.status(200).json(product);
    }
  } catch {
    return res.status(500).json({ message: "Request Failed" });
  }
};
const deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    } else {
      res.json({ message: "Product deleted successfully" });
    }
  } catch {
    return res.status(500).json({ message: "Request Failed" });
  }
};
const getProductbyCate = async (req, res) => {
  try {
    const products = await Product.find({ category: req.params.id });
    if (!products.length) {
      return res
        .status(404)
        .json({ message: "No products found in this category" });
    } else {
      return res.status(200).json(products);
    }
  } catch {
    return res.status(500).json({ message: "Request Failed" });
  }
};
const getProductTopSelling = async (req, res) => {
  try {
    const products = await Product.find().sort({ buyed: -1 }).limit(8);
    return res.status(200).json(products);
  } catch {
    return res.status(500).json({ message: "Request Failed" });
  }
};

const getProductAddMore = async (req, res) => {
  const index = parseInt(req.query.index);
  try {
    const products = await Product.find().limit(index);
    return res.status(200).json(products);
  } catch {
    return res.status(500).status({ message: "Request Failed" });
  }
};
module.exports = {
  getAllproduct,
  createProduct,
  getProductbuId,
  updateProduct,
  deleteProduct,
  getProductbyCate,
  getProductTopSelling,
  getProductAddMore,
};
