const admin = require("../model/apiSchema")
const manager = require("../model/managerSchema")
const bcrypt = require("bcryptjs")
const moment = require("moment")
const jwt = require ("jsonwebtoken")


module.exports.addAdmin = async (req,res) => {
    let user = await admin.findOne({ email: req.body.email })
    if (user) {
        return res.status(200).json ({ msg: " user already exited"})
    }

   

    req.body.password = await bcrypt.hash(req.body.password, 10)
    req.body.createdAt = moment().format ('MMM Do YYYY, h:mm:ss a')
    req.body.image = req.file.path

    let data = await admin.create(req.body);
    data ? res.status(200).json({ msg:"admin added"}) : res.status(400).json

    console.log(data)
    
}

module.exports.loginAdmin = async (req,res) => {
    const user = await admin.findOne({ email : req.body.email})
    console.log(user);
    

    if(user){
        if(await bcrypt.compare(req.body.password,user.password)){
            let token = jwt.sign({ userDate: user },"node",{ expiresIn: "2h" })
            res.status(200).json({msg: "login Successfully", token:token})
            console.log(user)
        }
        else {
            res.status(404).json({msg: "Wrong password...!!"})
        }
        
    }
    else {
        res.status(404).json({msg: "Admin Not Found"})
    }
    
}

module.exports.viewAdmin = async (req,res) => {
    let data = await admin.find({});
    res.status(200).json({ adminData: data});
}

module.exports.changePass = async (req, res) => {
    try {
      let data = await admin.findOne({ email: req.body.email });
  
      if (!data) {
        return res.status(200).json({ msg: "Admin not found" });
      }
  
      if (req.body.password === req.body.confirmPassword) {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        await admin.findByIdAndUpdate(data._id, { password: hashedPassword });
        return res.status(201).json({ msg: "Password changed" });
      }
  
      return res.status(200).json({ msg: "Passwords do not match" });
    } catch (err) {
      return res.status(400).json({ msg: "Error", error: err.message });
    }
  };
  

  module.exports.addManager = async (req, res) => {
    try {
        req.body.adminId = req.user.id; // Ensure req.user.id exists
        req.body.password = await bcrypt.hash(req.body.password, 10); // Hash the password
        await manager.create(req.body); // Create the manager
        res.status(200).json({ msg: "manager created" });
    } catch (err) {
        console.log(err); // Log the error to see what's happening
        res.status(400).json({ msg: "manager not added", error: err.message });
    }
};


















