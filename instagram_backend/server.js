import express from "express";
import mongoose from "mongoose";
import cors from "cors";

//1. server configuration
const app = express();
const PORT = 4000;

//2. middleware configuration -> every request will pass through this middleware
app.use(express.json());
app.use(cors());


//3. database configuration
try {
    mongoose.connect("mongodb+srv://karnnelessx:iM3cFsevCI2Oi9Cn@cluster0.30jax.mongodb.net/instagram_db?retryWrites=true&w=majority&appName=Cluster0")
    console.log("MongoDb connected sucessfully");
} catch (error) {
    console.log("MongoDb connection failed");    
}


//4. schema configuration (item in the table)
const postSchema = new mongoose.Schema({
    title:{type:String, required: true},
    image: {type:String, required: true},
    likeCount: {type:Number, default: 0},
    comments: [
        {
            commentMessage: {type:String, required:true},
        }
    ],
});


//5. Model Configuration (Table)
const Post = mongoose.model("Post",postSchema);


//6. Route configuration
app.get("/posts", async (req,res) => {
    try {
        const allPost = await Post.find();
        console.log(allPost);  //for devloper to debug
        return res.status(200).json(allPost);   // for frontend user to display post
        
    } catch (error) {
        console.log(error);   //for devloper to debug
        return res.status(5000).json({message: error});  // for frontend user to display message
    }
})


// Listen to the server
app.listen(4000,() =>{
    console.log("server is running on port 4000");
});