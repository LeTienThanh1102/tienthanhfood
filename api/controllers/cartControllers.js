const mongoose = require("mongoose");
const Cart = require("../models/Cart");

const getCartbyUserId = async (req, res) => {
  const userId = req.params.userId;
  try {
    const cart = await Cart.findOne({ user: userId }).populate("items.product");
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    return res.status(200).json(cart);
  } catch {
    return res.status(500).json({ message: "Request Failed" });
  }
};

const addToCart = async (req, res) => {
  const userId = mongoose.Types.ObjectId(req.body.userId);
  const productId = mongoose.Types.ObjectId(req.body.productId);
  try {
    // Chuyển đổi các ID từ String sang ObjectId

    let cart = await Cart.findOne({ user: userId });
    if (!cart) {
      cart = new Cart({ user: userId, items: [] });
    }

    const itemIndex = cart.items.findIndex(
      (item) => item.product.equals(productId)
    );
    if (itemIndex > -1) {
      // Cập nhật số lượng sản phẩm nếu đã tồn tại trong giỏ hàng
      cart.items[itemIndex].quantity += req.body.quantity;
    } else {
      // Thêm sản phẩm mới vào giỏ hàng
      cart.items.push({ product: productId, quantity:req.body.quantity });
    }

    const savedCart = await cart.save();
    res.status(200).json(savedCart);
  } catch (error) {
    res.status(500).json({ message: "Error adding to cart", error });
  }
};
const updateCartItem = async (req, res) => {
  const { userId, productId, quantity } = req.body;
  
  try {
    const cart = await Cart.findOne({ user: userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const itemIndex = cart.items.findIndex(
      (item) => item.product.toString() === productId
    );
    if (itemIndex > -1) {
      cart.items[itemIndex].quantity = quantity;
      const savedCart = await cart.save();
      res.json(savedCart);
    } else {
      res.status(404).json({ message: "Product not found in cart" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating cart item", error });
  }
};

const removeFromCart = async (req, res) => {
  const userId=req.params.userId;
   const productId = mongoose.Types.ObjectId(req.body.productId);
   console.log(req.body)
  try {
    const cart = await Cart.findOne({ user: userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    cart.items = cart.items.filter(
      (item) =>  !item.product.equals(productId)
    );
    const savedCart = await cart.save();
    res.json(savedCart);
  } catch (error) {
    res.status(500).json({ message: "Error removing from cart", error });
  }
};

module.exports = { getCartbyUserId, addToCart, updateCartItem, removeFromCart };
