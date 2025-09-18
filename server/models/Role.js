const mongoose = require('mongoose');

const roleSchema =  new mongoose.Schema({
    name:{
        type:String,
        required:[true,'role required!'],
        unique:true,
        enum:['admin','user','editor']
    },
    permission:{
        type:String,
        enum:['create,read,update,delete'],
        default:['read']
    }
})

const Role = mongoose.model('Role',roleSchema)
module.exports = Role;