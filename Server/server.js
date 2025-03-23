const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose')
const colors = require('colors-cli/safe')
const port = process.env.LOCAL_PORT || 3000;
const host = process.env.LOCAL_HOST;
const uri = process.env.MONGO_URI;
const db = process.env.DB
const userRoutes = require('./routes/userRoute');
const errorMiddleware = require('./middlewares/error-middleware')


app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use('/',userRoutes);
app.use(errorMiddleware);

const sucess = colors.x130.bold.italic
const internal_error = colors.red.bold.italic
// connections
mongoose.connect(`${uri}/${db}`).then((req,res)=>{
    try{
        app.listen(port,()=>{
            console.log(sucess(`Server is running on: ${host}:${port}`))
        })
        console.log(sucess(`Database Connected!`));
    }catch(error){
            console.log(error.message);
            console.log(internal_error("Server Disconnected.."))
        }
    }).catch((error)=>{
        console.log(error.message)
        console.log(internal_error("Internal-Server Error!"))
    })
    

    app.get('/',(req,res)=>{
        res.send("Server Runnig")
    })
// const os = require('os')    
// console.log(os.type())
// console.log(os.arch())
// console.log(os.platform())
// console.log(os.cpus())
// console.log(os.totalmem().toExponential())
// console.log(os.freemem())
// console.log(os.hostname())
// console.log(os.uptime())
// // fetching network interfeace
// const network_interface = os.networkInterfaces()
// console.log("Network interface:",network_interface);
// console.log(process.memoryUsage())

