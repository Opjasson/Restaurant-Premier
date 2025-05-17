import express from "express"
import { createData, deleteById, getData_Stock, getDataByID_Stock, updateData_Stock } from "../controllers/data_Stock.js"



const router = express.Router()

router.post("/stock", createData)
router.get("/stock", getData_Stock)
router.get("/stock/:id", getDataByID_Stock)
router.patch("/stock/:id", updateData_Stock)
router.delete("/stock/:id", deleteById)


export default router;