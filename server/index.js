const express = require('express');
const app = express()
const cors = require('cors');
require('dotenv').config()
const color = require('colors-cli');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const port = process.env.LOCAL_PORT || 5000;
const host = process.env.LOCAL_HOST;
const db_uri = process.env.MONGODB_URI;

// imported routes
const blogPostRoutes = require('./routes/blogPostRoutes');
const userRoutes = require('./routes/userRoutes');


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use('/api',blogPostRoutes) 
app.use('/api',userRoutes)

mongoose.connect(db_uri,{}).then(()=>{
    console.log(color.green_bt('Database connected successfully'));
    app.listen(port,()=>{
        console.log(color.yellow_bt(`Server is running at http://${host}:${port}`));
    })
}).catch((err)=>{
    console.log(color.red_bt('Database connection failed'));
    console.log(err);
})



