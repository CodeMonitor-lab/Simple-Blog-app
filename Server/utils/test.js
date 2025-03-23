const express = require('express')
const router = express.Router();

router.post('/signup',(req,res)=>{
    res.send("Hello")
    console.log('Hello');
})

// const testRequest = (req,res)=>{
//     res.status(200).json({msg:"testing"})
// }

module.exports = router;