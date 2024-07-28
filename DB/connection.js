import { Sequelize } from 'sequelize';
export const sequelize = new Sequelize('freedb_blogSystem', 'freedb_sahar', 'GXjBx?kckTXg8hT', {
    host: 'sql.freedb.tech',
    dialect:'mysql',
    port:3306
 });
 export const dbconnection =async()=>{
  try{

    return await sequelize.sync({alter:true});
  }catch(error){
    console.log("error to connect db");
  }
 }
 

 export default dbconnection;