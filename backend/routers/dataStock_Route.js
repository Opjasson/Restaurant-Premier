import express from "express"
import { createData, getData_Stock, getDataByID_Stock } from "../controllers/data_Stock.js"



const router = express.Router()

router.post("/stock", createData)
router.get("/stock", getData_Stock)
router.get("/stock/:id", getDataByID_Stock)

export default router;