
const Post = require("../models/posts_model");
const getAllPosts = async (req,res) =>{
const filter = req.query;
console.log(filter);
try{
    if(filter.owner){
        const Posts = await Post.find({owner:filter.owner});
        return res.status(201).send(Posts);
    }
    else{
     const Posts = await Post.find();
    return res.status(201).send(Posts);
    }
   
}

catch(err){
    return res.status(400).send(err.message);
}};

const getPostById = async (req,res) =>{
    const idfilter =req.params.id;
    if(idfilter){
        try{
            const post = await Post.findById(idfilter); 
            if(post){
                return res.status(201).send(post);
            }
            else{
                return console.log("the post is not find");
            }
        }
        catch(err){
            return res.status(401).send(err.message);
        }
    }return res.status(400).send(err.message);

    };

const createPost = async  (req,res) =>{
    console.log( req.body);
    try{
 const post = await Post.create(req.body);
 res.status(201).send(post);
    }
    catch(err){
            res.status(400).send(err.message);
    }};

    const deletePost =async(req,res)=>{
        console.log("Post delete service");
        res.send("Post delete service ");
    };
    const deletePostById = (req,res)=>{
        console.log("Post delete by id");
        res.send("Post delete by id ");
    };
module.exports = {getAllPosts,createPost,deletePost,getPostById,deletePostById};    