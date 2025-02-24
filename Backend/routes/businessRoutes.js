const express = require("express");
const { getCityDatabase, getCategoryDatabase } = require("../db");
const router = express.Router();

// Register a new business category in a city
router.post("/add-category", async (req, res) => {
  try {
    const { city, categoryName, categoryDB_URI } = req.body;

    const cityDB = await getCityDatabase(city);
    const CategoryModel = cityDB.model("CityDB", new mongoose.Schema({
      categoryName: String,
      categoryDB_URI: String,
    }));

    const newCategory = new CategoryModel({ categoryName, categoryDB_URI });
    await newCategory.save();

    res.json({ message: "Category added successfully", category: newCategory });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Register a new store in a category
router.post("/register-store", async (req, res) => {
  try {
    const { city, category, storeName, ownerId } = req.body;

    // Connect to City Database
    const cityDB = await getCityDatabase(city);

    // Connect to Category Database
    const categoryDB = await getCategoryDatabase(cityDB, category);
    const StoreModel = categoryDB.model("CategoryDB", new mongoose.Schema({
      storeName: String,
      ownerId: mongoose.Schema.Types.ObjectId,
      items: Array
    }));

    const newStore = new StoreModel({ storeName, ownerId, items: [] });
    await newStore.save();

    res.json({ message: "Store registered successfully", store: newStore });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Get all stores in a category
router.get("/:city/:category", async (req, res) => {
  try {
    const { city, category } = req.params;

    // Connect to City Database
    const cityDB = await getCityDatabase(city);

    // Connect to Category Database
    const categoryDB = await getCategoryDatabase(cityDB, category);
    const StoreModel = categoryDB.model("CategoryDB");

    const stores = await StoreModel.find();
    res.json(stores);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

module.exports = router;
