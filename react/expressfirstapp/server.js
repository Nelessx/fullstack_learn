import express from "express";
import mongoose from "mongoose";
import cors from "cors";

//making the app

const app = express();
const PORT = 4000;

//middleware -> every request will pass through this middleware
app.use(express.json());
app.use(cors());

//connecting to mongodb database using mongoose
try {
  mongoose.connect(
    "mongodb+srv://karnnelessx:UZvoBD1ip8exWQEW@cluster0.66lp7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  console.log("Mongodb connected sucessfully");
} catch (error) {
  console.log("Could't connect to the database");
}



//define schema 
const StudentSchema = new mongoose.Schema({
    name: { type: String,required: true},
    age: { type: Number,required: true},
    address: { type: String,required: false},
});

//define model
 const Student = mongoose.model("Student",StudentSchema);



 //Defne Students route
 app.get("/Students", async(req,res)=>{
    try{
        const response = await Student.find()
        return res.status(200).json(response)
    } catch(error){
        console.log("something went wrong");
    }
    
 });


//Test request to the server
app.get("/",(req,res)=>{
    res.status(200).json({
        message: "server is working",
    });
});

//Run the server
app.listen(PORT, () => {
  console.log("server is running");
});
