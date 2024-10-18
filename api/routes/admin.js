const express = require("express")
const route = express.Router()
const apiCtl = require("../controllers/apiCtl")

const multer = require("multer")

const Storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, "uploads/admin")
    },
    filename: (req,file,cb) => {
        cb (null, file.fieldname + "-" + Date.now())
    }
})

const upload = multer({ storage:Storage }).single("image")

route.post("/addAdmin",upload,apiCtl.addAdmin)
route.post("/loginAdmin",apiCtl.loginAdmin)
route.get("/viewAdmin",apiCtl.viewAdmin)
route.post("/changePass",apiCtl.changePass)
route.post("/addManager",apiCtl.addManager)

module.exports = route