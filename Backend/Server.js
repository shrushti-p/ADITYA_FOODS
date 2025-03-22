require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Define Mongoose Schemas
const Category = mongoose.model("Category", new mongoose.Schema({ name: String }));

const MenuItem = mongoose.model("MenuItem", new mongoose.Schema({
  name: String,
  description: String,
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  image: String,
  variants: [{ weight: String, price: Number }]
}));

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

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
