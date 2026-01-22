require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT=process.env.PORT||5500;

mongoose
.connect (process.env.DB_URI,{

})
.then(() => console.log("Connected to the database"))
.catch((error) => console.error(error));

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('Server is start running');
});
app.listen(PORT,()=>{console.log(`Server running on port :${PORT} `);
});