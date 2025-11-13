import { User } from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const Login = async(req,res) =>{
    try {
        const {email,password} = req.body;
           if (!email || !password) {
              return res.status(401).json({
              message:"Invalid Data",
              success:false
            })  
           };

           const user = await User.findOne({email});
           if (!user) {
               return res.status(401).json({
              message:"Invalid email or password",
              success:false
             }); 
           }

           const isMatch = await bcryptjs.compare(password, user.password);
           if (!isMatch) {
               return res.status(401).json({
                message:"Invalid email or password",
              success:false
               });
           }

           const token = await jwtsign("token", "dfgersvacnfgbecsd",{expiresIn:"1d"})

    } catch (error) {
        
    }
}

export const Register = async(req,res) => {
    try{
        const{fullName,email,password} = req.body;
        if(!fullName || !email || !password){
            return res.status(401).json({
                message:"Invalid data",
                success:false 
            })
        }
         const user = await User.findOne({email});
         if (user) {
            return res.status(401).json({
                message:"This email is already used",
                success:false,
            })
         }

         const hashedPassword = await bcryptjs.hash(password,16);

         await User.create({
            fullName,
            email,
            password:hashedPassword
         });

         return res.status(201).json({
            message:"Account created Successfully"
         })

    }catch(error){
        console.log(error);
    }
}