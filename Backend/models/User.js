const mongoose = require("mongoose");

const CartItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: "MenuItem" },
  quantity: { type: Number, default: 1 },
  weight: { type: String, required: true }, // Store the selected weight variant
});

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  cart: [CartItemSchema], // Cart contains multiple products with weight variants
});

module.exports = mongoose.model("User", UserSchema);
