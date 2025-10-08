const blogModel = require('../models/blogModel');

const createPost = async(req,res)=>{
    const {title,content,image,author,category,tags} = req.body;
    try{
        if(!title || !content || !image || !author){
            return res.status(400).json({message:"Title, content, image and author are required."})
        }
        const newPost = new blogModel({
            title,
            content,
            image,
            author,
            category,
            tags
        });
        const savedPost = await newPost.save();
        return res.status(201).json({message:"Blog post created successfully",post:savedPost})
    }catch(err){
        return res.status(500).json({message:"Internal server error",error:err.message})
    }   
}

// getting post by id
const getPostById = async(req,res)=>{
    const {id} = req.params;
    try{
        if(!id){
            return res.status(400).json({message:"Post ID is required."})
        }
        const post = await blogModel.findById(id).populate('author','name email');
        if(!post){
            return res.status(404).json({message:"Blog post not found"})
        }
        return res.status(200).json({post})
    }catch(err){
        return res.status(500).json({message:"Internal server error",error:err.message})
    }       
}

// get all posts (Undermaintentce)
const getAllPost = async (req, res) => {
    try {
      const posts = await blogModel.find().populate('author', 'name email');
      if (!posts || posts.length === 0) {
        return res.status(404).json({ message: "No blog posts found" });
      }
      return res.status(200).json({ posts });
    } catch (err) {
        console.log(err.message)
      return res.status(500).json({ message: "Internal server error", error: err.message });
    }
  };
  



module.exports = {createPost,getAllPost,getPostById};