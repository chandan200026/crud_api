const db = require('../config/db.Con')
exports.articleCreate = (data) => {
    return new Promise((resolve, reject) => {
        Query = `INSERT into users set ?`
        db.query(Query, [data], (err, res) => {
            if (err) {
                var ErrorMessage = {
                    error: err
                }
                reject(ErrorMessage)
            }
            else {
                resolve(res)

            }
        })
    })
};



exports.find = (email,password)=>{
    return new Promise((resolve,reject)=>{
        Query = `SELECT * FROM users where email = "${email}" AND password = "${password}"`
        db.query(Query,(err,res)=>{
            if(err){
                var ErrorMessage = {
                    error:err
                }
                reject(ErrorMessage)
            }
            else{
                resolve(res)
               
            }
        })
    })   
};

exports.findOne = (id)=>{
    return new Promise((resolve,reject)=>{
        Query = `SELECT * FROM users where id = "${id}"`
        db.query(Query,(err,res)=>{
            if(err){
                var ErrorMessage = {
                    error:err
                }
                reject(ErrorMessage)
            }
            else{
                resolve(res)
               
            }
        })
    })   
};
