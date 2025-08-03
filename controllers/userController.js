const User = require("../models/User");

exports.getMyProfile = (req, res) => {
  res.status(200).json(req.user); // user is added to req in middleware
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("name email bio");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error while fetching user" });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password"); // exclude password
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch users" });
  }
};
