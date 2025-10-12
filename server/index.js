const express = require('express');
const app = express()
const cors = require('cors');
require('dotenv').config()
const color = require('colors-cli');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const port = process.env.LOCAL_PORT || 5000;
// const host = "0.0.0.0"
const host = process.env.LOCAL_HOST;
const db_uri = process.env.MONGODB_URI;

// imported routes
const blogPostRoutes = require('./routes/blogPostRoutes');
const userRoutes = require('./routes/userRoutes');


app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']   
}));
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use('/api',blogPostRoutes) 
app.use('/api',userRoutes)

app.get('/',(req,res)=>{
    res.send('API is running....')
})

// database connection and server start 

mongoose.connect(db_uri,{}).then(()=>{
    console.log(color.green_bt('Database connected successfully'));
    app.listen(port,()=>{
        console.log(color.yellow_bt(`Server is running at http://${host}:${port}`));
    })
}).catch((err)=>{
    console.log(color.red_bt('Database connection failed'));
    console.log(err);
})



