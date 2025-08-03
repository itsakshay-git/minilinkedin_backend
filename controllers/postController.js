const Post = require("../models/Post");
const User = require("../models/User");

exports.createPost = async (req, res) => {
  const { content } = req.body;
  try {
    const newPost = await Post.create({
      content,
      author: req.user._id
    });

    const populatedPost = await newPost.populate("author", "name");

    res.status(201).json(populatedPost);
  } catch (err) {
    res.status(500).json({ message: "Error creating post" });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("author", "name")
      .sort({ createdAt: -1 });

    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: "Error fetching posts" });
  }
};

exports.getPostsByUser = async (req, res) => {
  try {
    const posts = await Post.find({ author: req.params.userId })
      .populate("author", "name")
      .sort({ createdAt: -1 });

    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: "Error fetching user's posts" });
  }
};
