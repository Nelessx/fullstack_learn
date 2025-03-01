import express from "express";
import mongoose from "mongoose";
import cors from "cors";
// const cloudinary = require("cloudinary").v2; //this is old syntax
import cloudinary from "cloudinary";
import multer from "multer";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import 'dotenv/config'

const upload = multer({ dest: 'uploads/' })

// 1. Server configuration
const app = express();

// 2. Middleware configuration
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  return res.send("Welcome to Instagram Backend");
});

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});



//
const verifyToken = (req,res,next) =>{
    const authToken = req.headers["authorization"];
    if(!authToken){
        return res.status(401).json({message: "no token provided"});
    }



    const pureToken =authToken.split(" ")[1]
    console.log(pureToken,"this is pure token");

    jwt.verify(pureToken, "hdhdhduyieabdhkasb", (err,decoded)=>{
        if(err){
            return res.status(403).json({message: "token doesn't match"});
    
        }
    })
    

    console.log(decoded,"this is decoded user data");
    next()



}




// 3. Database configuration
try {
  mongoose.connect(
    process.env.MONGO_URL,
  );
  console.log("MongoDB connected successfully");
} catch (error) {
  console.log("MongoDB connection failed", error);
}

app.get("/", (req, res) => {
  return res.send("Welcome to Instagram Backend");
});
// 4. Schema configuration (Items in the table)
const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  likeCount: { type: Number, default: 0 },
  comments: [
    {
      commentMessage: { type: String, required: true },
    },
  ],
});

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: {type: String, required: true},
  profilePicture: { type: String, required: true },
});

// 5. Model configuration (Post Table)
const Post = mongoose.model("Post", postSchema);
const User = mongoose.model("User", userSchema);

// 6. Route configuration
app.get("/posts",verifyToken, async (req, res) => {
  try {
    const allPost = await Post.find();
    console.log(allPost); // for developer to debug
    return res.status(200).json(allPost); // for frontend user to display post
  } catch (error) {
    console.log(error); // for developer to debug
    return res.status(500).json({ message: error }); // for frontend user to display message
  }
});

// Create route
app.post("/posts",upload.single('image'), async (req, res) => {
  try {
    // console.log(req)
    // console.log(req.body)

    console.log(req.file)


    // Upload image to cloudinary before saving to database
    const response = await cloudinary.uploader.upload(req.file.path);
    console.log(response, "response");

    const newPost = await new Post({...req.body,image: response.secure_url}).save();
    return res.status(201).json(newPost);
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error,
    });
  }
});

// Get one by id
app.get("/posts/:id", async (req, res) => {
  try {
    const singlePost = await Post.findById(req.params.id);
    return res.status(200).json(singlePost);
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error,
    });
  }
});

// We use put and patch for update
// Put is used to update all the fields of the object and it create the object if it does not exist

// Patch is used to update some fields of the object and it does not create the object if it does not exist

// Update one by id
app.patch("/posts/:id", async (req, res) => {
  try {
    const singlePost = await Post.findById(req.params.id);
    if (!singlePost) {
      return res.status(404).json({
        message: "Post not found",
      });
    }

    // If post exist then update the post
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).json(updatedPost);
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error,
    });
  }
});

// Delete post by id
app.delete("/posts/:id", async (req, res) => {
  try {
    const singlePost = await Post.findById(req.params.id);
    if (!singlePost) {
      return res.status(404).json({
        message: "Post not found",
      });
    }

    // If post exist then delete the post
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    return res.status(200).json(deletedPost);
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error,
    });
  }
});

// User route

app.post("/users",upload.single("profilePicture"), async (req, res) => {
  try {
    //check if username already exist
    const yesUsernameExist = await User.findOne({username: req.body.username});
    console.log(yesUsernameExist, "yesUserExist")
if(yesUsernameExist){
    return res.status(409).json({messahe: "user already exist"})
}


//bcrypt the plane password beffor savng to database
const saltRound = 10; //const factor for hashing algo
const hashedPassword = await bcrypt.hash(req.body.password, saltRound);
console.log(hashedPassword, "hashedPassword")

const response = await cloudinary.uploader.upload(req.file.path);
console.log(response, "response");



//save profie picture to cloudnery before savnig to database ans use secure url

    const newUser = await new User({...req.body, password: hashedPassword, profilePicture: response.secure_url}).save();
    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error,
    });
  }
});

app.get("/users", async (req, res) => {
  try {
    const allUsers = await User.find();
    return res.status(200).json(allUsers);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const singleUser = await User.findById(req.params.id);
    return res.status(200).json(singleUser);
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error,
    });
  }
});

app.patch("/users/:id", async (req, res) => {
  try {
    const singleUser = await User.findById(req.params.id);
    if (!singleUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // If user exist then update the user
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error,
    });
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const singleUser = await User.findById(req.params.id);
    if (!singleUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // If user exist then delete the user
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    return res.status(200).json(deletedUser);
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error,
    });
  }
});

app.post("/users/login", async (req,res)=>{
    try {

        //check if user exist
           const yesUsernameExist = await User.findOne({ username: req.body.username});
           console.log(yesUsernameExist,"yesUsernameExist");

           if(!yesUsernameExist){
            return res.status(404).json({message: "username doesn't exist"});
           }
           

        //if user exist process to login

        //compare password
        const passwordMatch = await bcrypt.compare(req.body.password, yesUsernameExist.password);
        console.log(passwordMatch,"passwordMatch");

        if(!passwordMatch){
            return res.status(401).json({message : "password doesn't exist"});
        }


        //generate token
        const jwtToken = jwt.sign({username: req.body.username}, "hdhdhduyieabdhkasb", {expiresIn:"24h"});
        console.log(jwtToken, "jwtToken");

        return res.status(200).json({
            
            message: "login sucessfull",
            jwtToken: jwtToken,
            User: yesUsernameExist,
        }
        );

        
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error: error,
          });
        
    }
   
        
    
})

// Listen to the server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
