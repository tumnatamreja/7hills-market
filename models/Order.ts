import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    product: String,
    amount: Number,
    address: String,
    type: String,
    status: {
      type: String,
      default: "pending",
    },
  },
  {
    timestamps: true, // 🔥 това добавя createdAt
  }
);

export default mongoose.models.Order ||
  mongoose.model("Order", OrderSchema);