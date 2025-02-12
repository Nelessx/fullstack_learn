import express from "express";
import mongoose from "mongoose"; //ORM
import cors from "cors"; //cross origin resource sharing
import "dotenv/config";

//app config
const app = express();

//middleware
app.use(express.json());
app.use(cors());

//exception handeling or error handeleing
try {
  mongoose.connect(process.env.MONGODB_URL);
  console.log("Database connected");
} catch (error) {
  console.log("Database couldn't connect", error);
}

//configure schema
const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  profilPicture: { type: String, required: true },
});

//construct table
const User = mongoose.model("User", userSchema);

//user routes (CRUD)
app.post("/users", async (req, res) => {
  try {
    const userExist = await User.findOne({ email: req.body.email });
    if (userExist) {
      return res.status(409).json({
        message: `user already exists with this email : ${req.body.email}`,
      });
    }

    const newUser = await new User(req.body).save();
    return res.status(201).json({
      message: "User created sucessfully",
      newUser: newUser,
    });
  } catch (error) {
    console.log("Something went wrong", error);
    return res.status(500).json({ message: "internal server error" });
  }
});

// read all users
app.get("/users", async (req,res) => {
    try {
        const fetchedUsers = await User.find();
        return res.status(200).json({
            message: "fetchd all users sucess",
            users: fetchedUsers,
        })
    } catch (error) {
        console.log("object not found",error);
        return res.status(500).json({message: "internal server error"});
        
    }
})

// read a single user
app.get("/users/:id", async (req,res) => {
    try {
        const fetchedUser = await User.findById(req.params.id);
        return res.status(200).json({
            message: "fetchd single user sucess",
            user: fetchedUser,
        })
    } catch (error) {
        console.log("object not found",error);
        return res.status(500).json({message: "internal server error"});
        
    }
})

// Update a single user
app.patch("/users/:id", async(req,res)=>{
    try {
        const userExist = await User.findById(req.params.id);
        if(!userExist){
            return res.status(404).json({
                message: "user not found"
            })
        }

        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true}); 
        return res.status(200).json({
            message: "user updated sucessfully",
            user: updatedUser
        })
    } catch (error) {
        console.log("object not found",error);
        return res.status(500).json({message: "internal server error"});
    }
})


// Delate a user
app.delete ("/users/:id", async (req,res) =>{
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);

        if(!deletedUser){
            return res.status(404).json({message : "user not found"});
        }


        return res.status(200).json({
            message: "user deleted sucessfully",
            user: deletedUser
        })
    } catch (error) {
        console.log("object not found",error);
        return res.status(500).json({message: "internal server error"});
    }
})






//schema for article
const articleSchema = new mongoose.Schema({
    aurthor: {type: String, required: true},
    title: {type: String, required: true},
    content: {type: String, required: true},
    thumbnail: {type: String }
})


//construct table
const Article = mongoose.model("Article", articleSchema);




//article routes(CRUD)
// create a article
app.post("/articles", async (req,res)=>{
    try {
        const newArticle = await new Article(req.body).save();
        return res.status(201).json({
            message: "article created sucessfully",
            newArticle: newArticle,
        });
    } catch (error) {
        console.log("Something went wrong", error);
        return res.status(500).json({message: "internal server error"});
    }
})


// read all articles
app.get("/articles", async (req,res) => {
    try {
        const fetchedArticles = await Article.find();
        return res.status(200).json({
            message: "fetchd all articles sucessfull",
            articles: fetchedArticles,
        })
    } catch (error) {
        console.log("object not found",error);
        return res.status(500).json({message: "internal server error"});
        
    }
})

// read a single article by id
app.get("/articles/:id", async (req,res) => {
    try {
        const fetchedArticle = await Article.findById(req.params.id);
        return res.status(200).json({
            message: "fetchd single article sucessful",
            article: fetchedArticle,
        })
    } catch (error) {
        console.log("object not found",error);
        return res.status(500).json({message: "internal server error"});
        
    }
})

// Update a single article
app.patch("/articles/:id", async(req,res)=>{
    try {
        const articleExist = await Article.findById(req.params.id);
        if(!articleExist){
            return res.status(404).json({
                message: "article not found"
            })
        }

        const updatedArticle = await Article.findByIdAndUpdate(req.params.id, req.body, {new: true}); 
        return res.status(200).json({
            message: "article updated sucessfully",
            article: updatedArticle
        })
    } catch (error) {
        console.log("object not found",error);
        return res.status(500).json({message: "internal server error"});
    }
})

// Delate a article
app.delete ("/articles/:id", async (req,res) =>{
    try {
        const deletedArticle = await Article.findByIdAndDelete(req.params.id);

        if(!deletedArticle){
            return res.status(404).json({message : "article not found"});
        }


        return res.status(200).json({
            message: "article deleted sucessfully",
            article: deletedArticle
        })
    } catch (error) {
        console.log("object not found",error);
        return res.status(500).json({message: "internal server error"});
    }
})






app.listen(process.env.PORT, () => {
  console.log("server is running on port ", process.env.PORT);
});
