// require('dotenv').config({path:'../env'})
import dotenv from "dotenv"
import conncetDB from "./db/index.js";
dotenv.config({
    path:'..//env'
})

conncetDB()



// FIRST APPROACH

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI} / ${DB_NAME} `);
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// })();

