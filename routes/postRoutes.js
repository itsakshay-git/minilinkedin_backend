const express = require("express");
const router = express.Router();
const { createPost, getAllPosts, getPostsByUser } = require("../controllers/postController");
const protect = require("../middleware/authMiddleware");

// Public
router.get("/", getAllPosts);
router.get("/user/:userId", getPostsByUser);

// Protected
router.post("/", protect, createPost);

module.exports = router;
