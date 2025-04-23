import express from "express"
import { createData } from "../controllers/BarangMasuk.js"

const router = express.Router()

router.post("/stock", createData)

export default router;