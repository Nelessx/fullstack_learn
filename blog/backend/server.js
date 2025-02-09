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

app.listen(process.env.PORT, () => {
  console.log("server is running on port ", process.env.PORT);
});
