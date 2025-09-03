const http = require('http');
const express = require('express');
const dotenv = require('dotenv').config();
const dbconnect = require('./config/dbconnect');

dbconnect();

const app = express();

//services
app.use(express.json()); 

//routes

//server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


// const server =  http.createServer((req,res) =>{
//     console.log(req);
// });
