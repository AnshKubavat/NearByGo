const mongoose = require("mongoose");

// 1️⃣ Global Database Schema (Stores cities)
const GlobalSchema = new mongoose.Schema({
  city: { type: String, unique: true },
  cityDB_URI: { type: String, required: true },
});
const GlobalDB = mongoose.model("GlobalDB", GlobalSchema);

// 2️⃣ City Database Schema (Stores business categories in each city)
const CitySchema = new mongoose.Schema({
  city: { type: String, unique: true },
  categoryName: { type: String },
  categoryDB_URI: { type: String, required: true },
});
const CityDB = mongoose.model("CityDB", CitySchema);

// 3️⃣ Category Database Schema (Stores businesses in that category)
const CategorySchema = new mongoose.Schema({
  category: { type: String },
  storeName: { type: String, unique: true },
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  items: [
    {
      name: String,
      price: Number,
      description: String,
      photoUrl: String,
    },
  ],
});
const CategoryDB = mongoose.model("CategoryDB", CategorySchema);

// Function to connect to city-specific database
async function getCityDatabase(cityName) {
  const city = await GlobalDB.findOne({ city: cityName });
  if (!city) throw new Error("City not found");
  return mongoose.createConnection(city.cityDB_URI);
}

// Function to connect to category-specific database
async function getCategoryDatabase(cityDB, categoryName) {
  const category = await cityDB.model("CityDB").findOne({ categoryName });
  if (!category) throw new Error("Category not found");
  return mongoose.createConnection(category.categoryDB_URI);
}

module.exports = { GlobalDB, CityDB, CategoryDB, getCityDatabase, getCategoryDatabase };
