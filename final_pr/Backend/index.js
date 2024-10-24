const express=require('express');
const port=2025;
const session=require("express-session")

const app=express();
const db=require('./Config/db')
const cors=require('cors');


app.use(cors({ origin : 'http://localhost:5173' , credentials:true}));
app.use(express.json());
app.use(session({
    secret: '12345',  // Replace with your own secret key
    resave: false,              // Don't save session if unmodified
    saveUninitialized: true,    // Save uninitialized sessions
    cookie: { maxAge:3600000 }   // Set to true if using HTTPS in production
  }));

app.use(express.urlencoded());


app.use("/",require('./Routes/index'));

app.listen(port,console.log(`Server Started on port : ${port}`));
