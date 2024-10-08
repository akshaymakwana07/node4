const mongoose=require('mongoose');

const db=mongoose.connect('mongodb://localhost:27017/admin-project')
.then(()=>console.log("MongoDb Connected...."))
.catch((err)=>console.log(err))


module.exports=db;
