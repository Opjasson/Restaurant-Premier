import express from "express";
import dotenv from "dotenv";
import data_Stock from  "./model/Model_Stock.js";

// (async () => {
//     await data_Stock.sync();
// })();

const app = express();

app.listen(() => {
    console.log("server running");
});
