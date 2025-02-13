import mongoose from 'mongoose'

import {DB_NAME
} from '../constants.js'

export const connectdb = async () =>{
    try{
      const connection = await mongoose.connect(`${process.env.MONGO_URI}`,{});
     
      console.log(`mongo db connected\n  db-name : ${connection.connection.db.databaseName}`)
      
      
      
    }
    catch(err) {
    console.log(`cdnt connect \n ${err} `);
    process.exit(1);
    
    }
  }