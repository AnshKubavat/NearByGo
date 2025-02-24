const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  password: String,
  city: String, // Stores user's city for easier lookup
});

const User = mongoose.model("User", UserSchema);
module.exports = { User };
