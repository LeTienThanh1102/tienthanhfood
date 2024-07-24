const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
    totalAmount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "Processing", "Completed", "Canceled"],
      default: "Pending",
    },
    deliveryAddress: {
      type: String,
      required: true,
    },
    paymentMethod: {
      type: String,
      enum: ["Credit Card", "Debit Card", "Cash on Delivery"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);
