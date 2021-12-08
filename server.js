const express = require('express');
const BodyParser = require("body-parser").json()
const bodyParser = require("body-parser").urlencoded({extended:true})
const con = require('./src/config/db.Con');
const userRoute = require('./src/routes/userRoute')
const app = express();
const PORT = 4200;
app.use(express.json())
app.use('/', userRoute)


app.listen(PORT,(err)=>{
    if(err) throw err
    console.log('server created '+PORT);
})

