import Blogrouter from './modules/blog/blog.router.js';
import Userrouter from './modules/user/user.router.js';
import authRouter from './modules/auth/auth.router.js';
import dbconnection from '../DB/connection.js';
import cors from 'cors';



export const initApp =(app,express)=>{
    dbconnection();

   app.use(express.json());
   app.use(cors());
   app.use('/users',Userrouter);
   app.use('/blogs',Blogrouter);
   app.use('/auth',authRouter)
   app.use('*',(req,res)=>{
    return res.status(404).json({message:"Page Not Found !!"})
})

}
