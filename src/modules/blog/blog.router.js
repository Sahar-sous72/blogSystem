import  {Router} from 'express';
import blogModel from '../../../DB/model/blog.model.js'
const Blogrouter= Router()

Blogrouter.get('/', async(req, res) =>{
try{
    const blogs = blogModel.findAll();
    return res.status(200).json({message:"sucess",blogs})
}catch(error){
 return res.status(500).json({message:"error",error})
}
}
);
export  default Blogrouter;
