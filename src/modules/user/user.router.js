import  {Router} from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
import userModel from "./../../../DB/model/user.model.js"

const app = Router();



//get all user 
app.get('/',async(req,res)=>{

    const{token} = req.headers;
    const decoded = jwt.verify(token,'soso');

    if(decoded.username != 'suha'){
        return res.status(400).json({message:" not autchenticated user"})
    }
        
    const user =await userModel.findAll({
       attributes:['name','email']
    })
    return res.status(200).json({message:"sucsess",user})
})


//delete
app.delete('/:id',async(req,res)=>{

    const{token} = req.headers;
    const decoded = jwt.verify(token,'soso');

    if(decoded.username != 'suha'){
        return res.status(400).json({message:" not autchenticated user"})
    }
    const{id}=req.params;
    const user = await userModel.destroy({
        where:{
            id : id
        }
    });
    if(!user){
        return res.status(404).json({message:"email not found"})
    }else{
        return res.status(201).json({message:"sucsess"})
    }


})

// update
app.put('/:id',async(req,res)=>{
    const{id}=req.params;
    const{name}=req.body;
     
   const user =  await userModel.update(
        {name:name},{
            where:{
                id :id
            }
        }
    )
    if(!user){
        return res.status(404).json({message:"user not found"})
    }else{
        return res.status(201).json({message:"sucsess",user})
    }
})
export  default app;
