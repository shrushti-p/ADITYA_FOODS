const express = require("express");
const auth = require("../middleware/auth");
const User = require("../models/User");
const Product = require("../models/Product");

const router = express.Router();

// Add to cart
router.post("/add", auth, async (req, res) => {
  const { productId, quantity } = req.body;
  const user = await User.findById(req.user.id);

  const product = await Product.findById(productId);
  if (!product) return res.status(404).json({ message: "Product not found" });

  user.cart.push({ product: productId, quantity });
  await user.save();

  res.json({ message: "Product added to cart", cart: user.cart });
});

// Get cart items
router.get("/", auth, async (req, res) => {
  const user = await User.findById(req.user.id).populate("cart.product");
  res.json(user.cart);
});

module.exports = router;