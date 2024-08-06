// require('dotenv').config({path:'../env'})
import dotenv from "dotenv";
import conncetDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "../.env",
});

conncetDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("ERROR: ", error);
      throw error;
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server is running at port: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("MONGO DB connection FAILED!!", err);
  });

// FIRST APPROACH

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI} / ${DB_NAME} `);
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// })();
