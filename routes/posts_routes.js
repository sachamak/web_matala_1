
const express = require('express')
const router =express.Router();
const Post = require("../controller/post_controller");  
router.get("/", Post.getAllPosts);
router.get("/:id", Post.getPostById);

router.post("/",Post.createPost);
router.delete("/",Post.deletePost);
router.delete("/:id",Post.deletePostById);
module.exports = router;