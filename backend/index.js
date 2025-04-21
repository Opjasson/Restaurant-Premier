import express from "express";
import dotenv from "dotenv";
import barangMasuk from "./model/Model_BarangMasuk.js";

// (async () => {
//     await barangMasuk.sync();
// })();

const app = express();

app.listen(() => {
    console.log("server running");
});
