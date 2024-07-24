const mongoose = require("mongoose");
const Order = require("../models/Order");

const createOrder = async (req, res) => {
  console.log(req.body);
  const { userId, address, quantity, price,total, productId } =req.body;
  try {
    let order = new Order({
      user: userId,
      items: [{ product: productId, quantity, price }],
      totalAmount: total,
      deliveryAddress: address
    });
    const savedOrder = await order.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(500).json({ message: "Error creating order", error });
  }
};

// Lấy danh sách đơn hàng của một người dùng
const getUserOrders = async (req, res) => {
  const { userId } = req.params;
  try {
    const orders = await Order.find({ user: userId }).populate("items.product");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Error fetching orders", error });
  }
};

// Lấy chi tiết đơn hàng
const getOrderById = async (req, res) => {
  const { orderId } = req.params;
  try {
    const order = await Order.findById(orderId).populate("items.product");
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: "Error fetching order", error });
  }
};

// Cập nhật trạng thái đơn hàng
const updateOrderStatus = async (req, res) => {
  const { orderId } = req.params;
  const { status } = req.body;
  try {
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    order.status = status;
    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } catch (error) {
    res.status(500).json({ message: "Error updating order status", error });
  }
};

module.exports = {
  createOrder,
  getUserOrders,
  getOrderById,
  updateOrderStatus,
};
