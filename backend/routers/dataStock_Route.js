import express from "express"
import { createData, getData_Stock } from "../controllers/BarangMasuk.js"



const router = express.Router()

router.post("/stock", createData)
router.get("/stock", getData_Stock)


export default router;