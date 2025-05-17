import express from "express";
import dotenv from "dotenv";
import data_Stock from "./model/Model_Stock.js";
import stockRouter from "./routers/dataStock_Route.js";
import cors from "cors";

// (async () => {
//     await data_Stock.sync();
// })();

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(stockRouter);

app.listen(process.env.PORT, () => {
    try {
        console.log(
            `server running on port http://localhost:${process.env.PORT}`
        );
    } catch (error) {
        console.log(error.message);
    }
});
