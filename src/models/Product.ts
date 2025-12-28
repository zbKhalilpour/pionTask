import mongoose, { Schema } from "mongoose";

const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    stock: { type: Number, required: true }
  },
  { timestamps: true }
);

export default mongoose.model("Product", ProductSchema);
