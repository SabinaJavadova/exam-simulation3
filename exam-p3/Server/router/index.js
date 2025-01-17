const express = require ("express")

const{ getAllData, getAllDataById, deleteData, postData } = require("../controller/index")

const router = express.Router();

router.get("/",getAllData)
router.get("/:id",getAllDataById)
router.delete("/:id",deleteData)
router.post("/",postData)

module.exports=router