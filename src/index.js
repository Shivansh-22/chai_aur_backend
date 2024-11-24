import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config();

connectDB();
// import express from "express";

// const app = express();

// // this is IIFE fucntion (Immediately Invoked Function Expression)
// // we can make DB connection using any normal function as well but this is more professional approach
// ;(async () => {
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         app.on("error", (e) =>{
//             console.log("ERRR: ", e)
//             throw e;
//         })

//         app.listen(process.env.PORT , () => {
//             console.log(`App is listening on port ${process.env.PORT}`);
//         })
//     }catch(e){
//         console.error("ERROR: ", e)
//         throw e
//     }
// })()