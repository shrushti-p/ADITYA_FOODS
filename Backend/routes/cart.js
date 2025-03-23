router.post("/add", auth, async (req, res) => {
  const { productId, quantity, weight } = req.body;
  const user = await User.findById(req.user.id);
  
  const product = await Product.findById(productId);
  if (!product) return res.status(404).json({ message: "Product not found" });

  // Check if the product is already in the cart with the same weight
  const existingItem = user.cart.find(
    (item) => item.product.toString() === productId && item.weight === weight
  );

  if (existingItem) {
    existingItem.quantity += quantity; // Update quantity if it exists
  } else {
    user.cart.push({ product: productId, quantity, weight }); // Add new item
  }

  await user.save();
  res.json({ message: "Product added to cart", cart: user.cart });
});
