require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db11");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const Serie_Route = require("./routes/series");

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/Series", Serie_Route);

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Listening on port ${port}...`));

// const express = require('express');
// const app = express();

// app.get("/api", (req, res) => {
//     res.json({"users" : ["userOne", "userTwo", "userThree"]})
// })

// app.listen(5000, () => { console.log(" server started at the port 5000")})

// import express from 'express';
// import cors from 'cors'
// import mongoose from 'mongoose';
// const express = require('express')
// const cors = require('cors')
// const mongoose = require('mongoose')

// const app = express();
// app.use(express.json());
// app.use(express.urlencoded());
// app.use(cors())

// mongoose.connect("mongodb://localhost:27017/RegisterationDB", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }, () => {
//     console.log("DB Connected");
// });

// const userSchema = mongoose.Schema({
//     name: String,
//     email: String,
//     tel: Number,
//     password: String
// })

// const User = new mongoose.model("User", userSchema)
// //Routes

// app.post("/login", (req, res) => {
//     res.send("My API Login")
// });

// app.post("/register", (req, res) => {
//     const { name, email, tel, password} = req.body
//     User.findOne({email: email}, (err, user) => {
//         if(user){
//             res.send({message: "User already registerd"})
//         } else {
//             const user = new User({
//                 name,
//                 email,
//                 tel,
//                 password
//             })
//             user.save(err => {
//                 if(err) {
//                     res.send(err)
//                 } else {
//                     res.send( { message: "Successfully Registered, Please login now." })
//                 }
//             })
//         }
//     });
// });

// app.listen(5000, () => {
//     console.log("BE started at port 5000");
// })



