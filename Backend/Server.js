require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Define Mongoose Schemas

// User Schema
const User = mongoose.model("User", new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String
}));

// Category Schema
const Category = mongoose.model("Category", new mongoose.Schema({ name: String }));

// MenuItem Schema
 const MenuItem = mongoose.model("MenuItem", new mongoose.Schema({
  name: String,
  description: String,
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  image: String,
  variants: [{ weight: String, price: Number }]
}));


// CartItem Schema – includes the selected weight
const CartItem = mongoose.model("CartItem", new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "MenuItem" },
  weight: String,
  quantity: Number
}));

// Token verification middleware
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Unauthorized" });
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.userId = decoded.id;
    next();
  });
};

// Register a new user
app.post("/api/users/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password)
      return res.status(400).json({ message: "All fields are required" });
    
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "Email already in use" });
    
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Login a user
app.post("/api/users/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ message: "All fields are required" });
    
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });
    
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Fetch all categories with products
app.get("/api/categories-with-products", async (req, res) => {
  try {
    const categories = await Category.find();
    const categoriesWithProducts = await Promise.all(categories.map(async (category) => {
      const products = await MenuItem.find({ categoryId: category._id });
      return { ...category.toObject(), products };
    }));
    res.json(categoriesWithProducts);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
});

// Add an item to the cart
app.post("/cart/add", verifyToken, async (req, res) => {
  try {
    const { productId, weight, quantity } = req.body;
    if (!productId || !weight || !quantity)
      return res.status(400).json({ message: "All fields are required" });
    
    const product = await MenuItem.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });
    
    // Check if an item with the same weight is already in the cart
    const existingItem = await CartItem.findOne({ userId: req.userId, productId, weight });
    if (existingItem) {
      existingItem.quantity += quantity;
      await existingItem.save();
    } else {
      const cartItem = new CartItem({ userId: req.userId, productId, weight, quantity });
      await cartItem.save();
    }
    
    res.status(200).json({ message: "Item added to cart" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Get cart items (with proper weight and price info)
app.get("/api/cart", verifyToken, async (req, res) => {
  try {
    // Populate product details from MenuItem
    const cartItems = await CartItem.find({ userId: req.userId }).populate("productId");
    
    // Format the response to include weight and calculate price based on the selected variant
    const formattedCart = cartItems.map(item => {
      // Find the variant matching the weight for price determination
      const variant = item.productId?.variants.find(v => v.weight === item.weight);
      return {
        _id: item._id,
        name: item.productId?.name || "Unknown Product",
        // Use the variant price if found, else 0
        price: variant ? variant.price : 0,
        image: item.productId?.image || "/images/default.png",
        color: item.productId?.color || "N/A",
        quantity: item.quantity,
        weight: item.weight  // This is directly stored in the cart item
      };
    });
    
    res.json(formattedCart);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Update quantity for a cart item
app.put("/api/cart/:id", verifyToken, async (req, res) => {
  try {
    const { quantity } = req.body;
    await CartItem.findByIdAndUpdate(req.params.id, { quantity });
    res.json({ message: "Quantity updated" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Remove an item from the cart
app.delete("/api/cart/:id", verifyToken, async (req, res) => {
  try {
    await CartItem.findByIdAndDelete(req.params.id);
    res.json({ message: "Item removed" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Fetch all products (menu items)
app.get("/api/products", async (req, res) => {
  try {
    const products = await MenuItem.find().populate("categoryId", "name"); // Populating category name
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

app.get("/api/products/:id", async (req, res) => {
  try {
    console.log("Received ID:", req.params.id); // Debugging log
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid Product ID" });
    }

    const product = await MenuItem.findById(id).populate("categoryId", "name");
    
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).json({ message: "Server error", error });
  }
});


// const parser = require("./middleware/multer");


// app.post("/api/products", parser.single("image"), async (req, res) => {
//   try {
//     const { name, description, categoryId, variants } = req.body;

//     const parsedVariants = JSON.parse(variants); // Make sure variants come as JSON string from frontend

//     const newItem = new MenuItem({
//       name,
//       description,
//       categoryId,
//       image: req.file.path, // Cloudinary URL
//       variants: parsedVariants,
//     });

//     await newItem.save();
//     res.status(201).json({ message: "Product created", product: newItem });
//   } catch (err) {
//     console.error("Error uploading product:", err);
//     res.status(500).json({ message: "Server error", error: err });
//   }
// });


// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
