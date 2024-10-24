const express=require('express')

const routes=express.Router();
const AdminCtl=require('../Controller/AdminCtl');




routes.post("/registration",AdminCtl.Registration);
routes.post("/loginadmin",AdminCtl.loginadmin)
routes.get("/viewadmin",AdminCtl.viewAdmin)
routes.post("/insertadmin",AdminCtl.insertadmin)
routes.delete("/deleteadmin",AdminCtl.deleteadmin)
routes.post("editdata",AdminCtl.editdata)
routes.put("/updatedata",AdminCtl.updatedata)

routes.post('/forgetpassAdmin',AdminCtl.forgetpassAdmin);
routes.post('/verifyOtp',AdminCtl.verifyOtp);



module.exports=routes;