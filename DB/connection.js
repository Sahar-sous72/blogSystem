import { Sequelize } from 'sequelize';
export const sequelize = new Sequelize('blog_9', 'root', '', {
    host: 'localhost',
    dialect:'mysql'
 });
 export const dbconnection =async()=>{
  try{

    return await sequelize.sync({alter:true});
  }catch(error){
    console.log("error to connect db");
  }
 }
 

 export default dbconnection;