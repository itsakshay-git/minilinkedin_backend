const express = require("express");
const router = express.Router();
const { getMyProfile, getUserById, getAllUsers } = require("../controllers/userController");
const protect = require("../middleware/authMiddleware");

router.get("/me", protect, getMyProfile);
router.get("/", getAllUsers);
router.get("/:id", getUserById); 

module.exports = router;
