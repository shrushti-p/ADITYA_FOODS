require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const Category = mongoose.model("Category", new mongoose.Schema({ name: String }));

const categories = [
  {name : "All"},
  { name: "Pulp" },
  { name: "Oil" },
  { name: "Paste" },
  {name :"Candies"},
  { name: "Chutneys" },
  {name:"Green Peas"},
  { name: "Dairy Delight" }
];

Category.insertMany(categories)
  .then(() => {
    console.log("Categories added!");
    mongoose.connection.close();
  })
  .catch(err => console.log(err));
