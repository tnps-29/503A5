const express = require("express");
const dotenv = require("dotenv");

//route
const hospitals = require("./routes/hospitals");
//enc
dotenv.config({ path: "./config/config.env" });

const app = express();
app.use("/api/v1/hospitals", hospitals);

// app.get('/', (req,res) => {
//     //res.send('<h1>hello from express</h1>');
//     //res.send({name:'Bob'});
//     //res.send({name:'Bob'});
//     //res.sendStatus(400);
//     //res.status(400).json({success:false})
//     res.status(200).json({sucess:true, data:{id:1}});
// })

const PORT = process.env.PORT || 5003;
app.listen(
  PORT,
  console.log("server running in", process.env.NODE_ENV, "mode on port", PORT),
);
