import { Router } from "express";
import userModel from "./../../../DB/model/user.model.js"
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
const app = Router();

//register
app.post('/',async(req,res)=>{
    const{name,email,password}=req.body;
   res.json({name,email,password});

    var passwordHashed = bcrypt.hashSync(password, 8);

    const user =await userModel.create({name:name,email:email,password:passwordHashed})
    return res.status(201).json({message:"success",user});


})


// login
app.post('/login',async(req,res)=>{
    const{password,email}=req.body;
    const user = await userModel.findOne({
        where:{
           
           email:email
        }
    })
    if(!user){
        return res.status(404).json({message:"email not found"})
    }
    const check = await bcrypt.compare(password,user.password)
    if(!check){
        return res.status(404).json({message:"invalid password"})
    }
    const token = await jwt.sign({id:user.id,username:user.name},'soso');
    return res.status(201).json({message:"sucsess",token})
})


export default app;
