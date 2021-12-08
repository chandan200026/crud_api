const mysql = require('mysql')

const db = mysql.createConnection({
    host:'localhost',
    user:'root' ,
    password:'',
    database:'task',
    port:3306,
})
db.connect((error)=>{
    if(error){
        console.error("error connecting: "+error);
    }
    else{
        console.log('connected database server');
    }
})

module.exports = db