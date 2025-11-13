import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./utils/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js"

databaseConnection();

dotenv.config({
     path:".env"
})

const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

app.get("/", (req,res) => {
     res.status(200).json({
          message:"Hello i am coming from Backend",
          success:true
     })
})

app.use("/api/v1/user", userRoute)


app.listen(process.env.PORT, () => {
     console.log(`Server listen at port ${process.env.PORT}`);
})