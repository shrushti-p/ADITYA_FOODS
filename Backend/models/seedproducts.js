require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const Category = mongoose.model("Category", new mongoose.Schema({ name: String }));
const MenuItem = mongoose.model("MenuItem", new mongoose.Schema({
  name: String,
  description: String,
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  image: String,
  variants: [{ weight: String, price: Number }]
}));

async function seedProducts() {
  const categories = await Category.find();
  
  const categoryMap = {};
  categories.forEach(cat => categoryMap[cat.name] = cat._id);

  const products = [
    //Pulp
    { name: "Rabdi Pulp", description: "Delicious Rabdi Pulp", categoryId: categoryMap["Pulp"], image: "images/rabdi_pulp.jpeg", variants: [{ weight: "½ kg", price: 100 }, { weight: "1 kg", price: 200 }] },
    { name: "Jamun Pulp", description: "Fresh Jamun Pulp", categoryId: categoryMap["Pulp"], image: "images/jamun_pulp.jpeg", variants: [{ weight: "½ kg", price: 175 }, { weight: "1 kg", price: 350 }] },
    { name: "Mango Pulp", description: "Sweet Mango Pulp", categoryId: categoryMap["Pulp"], image: "images/mango_pulp.jpeg", variants: [{ weight: "½ kg", price: 135 }, { weight: "1 kg", price: 270 }] },
    { name: "Guava Pulp", description: "Tasty Guava Pulp", categoryId: categoryMap["Pulp"], image: "images/guava_pulp.jpeg", variants: [{ weight: "½ kg", price: 75 }, { weight: "1 kg", price: 150 }] },
    
    // Chutneys
    { name: "Peanut Chutney", description: "Rich Peanut Chutney", categoryId: categoryMap["Chutneys"], image: "images/peanut_chutney.jpeg", variants: [{ weight: "½ kg", price: 120 }, { weight: "1 kg", price: 240 }] },
    { name: "Javas Chutney", description: "Tasty Javas Chutney", categoryId: categoryMap["Chutneys"], image: "images/javas_chutney.jpeg", variants: [{ weight: "1 kg", price: 250 }] },
    
    // Paste
    { name: "Ginger & Garlic Paste", description: "Fresh Ginger and Garlic Paste", categoryId: categoryMap["Paste"], image: "images/ginger_garlic_paste.jpeg", variants: [{ weight: "½ kg", price: 50 }, { weight: "1 kg", price: 100 }] },
    
    // Oil
    { name: "Peanut Oil", description: "Pure Peanut Oil", categoryId: categoryMap["Oil"], image: "images/peanut_oil.jpeg", variants: [{ weight: "½ L", price: 80 }, { weight: "1 L", price: 160 }, { weight: "5 L", price: 800 }] },
    { name: "Kardi Oil", description: "Pure Kardi Oil", categoryId: categoryMap["Oil"], image: "images/kardi_oil.jpeg", variants: [{ weight: "½ L", price: 115 }, { weight: "1 L", price: 230 }, { weight: "5 L", price: 1150 }] },
    
    // Candies
    { name: "Amla Candy", description: "Tasty Amla Candy", categoryId: categoryMap["Candies"], image: "images/amla_candy.jpeg", variants: [{ weight: "½ kg", price: 170 }, { weight: "1 kg", price: 300 }] },
    { name: "Mango Candy", description: "Sweet Mango Candy", categoryId: categoryMap["Candies"], image: "images/mango_candy.jpeg", variants: [{ weight: "½ kg", price: 170 }, { weight: "1 kg", price: 300 }] },
    
  
  
    // Dairy Delight
    { name: "Paneer", description: "Soft and Fresh Paneer", categoryId: categoryMap["Dairy Delight"], image: "images/paneer.jpeg", variants: [{ weight: "½ kg", price: 140 }, { weight: "1 kg", price: 280 }] },
    { name: "Khava", description: "Rich and Pure Khoya", categoryId: categoryMap["Dairy Delight"], image: "images/khoya.jpeg", variants: [{ weight: "½ kg", price: 150 }, { weight: "1 kg", price: 300 }] },
    { name: "Ghee", description: "Pure Ghee", categoryId: categoryMap["Dairy Delight"], image: "images/ghee.jpeg", variants: [{ weight: "½ kg", price: 400 }, { weight: "1 kg", price: 800 }] },
    { name: "Cow Ghee", description: "Pure Cow Ghee", categoryId: categoryMap["Dairy Delight"], image: "images/cow_ghee.jpeg", variants: [{ weight: "½ kg", price: 300 }, { weight: "1 kg", price: 600 }] },
    { name: "Green Peas", description: "Fresh, tender green peas", categoryId: categoryMap["Green Peas"], image: "images/green_peas.jpeg", variants: [{ weight: "1 kg", price: 90 }] },
  ];

  await MenuItem.insertMany(products);
  console.log("✅ All products added!");
  mongoose.connection.close();
}

seedProducts();

const Product = mongoose.model("menuitems", MenuItem);
module.exports = Product;
