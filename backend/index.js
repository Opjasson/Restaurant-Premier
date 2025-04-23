import express from "express";
import dotenv from "dotenv";
import data_Stock from "./model/Model_Stock.js";

// (async () => {
//     await data_Stock.sync();
// })();
dotenv.config();
const app = express();



app.listen(process.env.PORT, () => {
    console.log(`server running on port http://localhost:${process.env.PORT}`);
});
