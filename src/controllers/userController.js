const bcrypt = require('bcrypt');
let db = require('../config/db.Con')
const help = require('../modules/mySql')
const { validationResult } = require("express-validator");
const jwt = require('jsonwebtoken');


// user registration--
exports.create = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                message: "place validate fields ",
                errors: errors,
            });
        } else {
            console.log(req.body);
            let data = {
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                password: req.body.password,
            }
            let result = await help.articleCreate(data)
            return res.send(result)
        }
    }
    catch (error) {
        res.send(error
        );
    }
};

exports.login = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                message: "place validate fields ",
                errors: errors,
            });
        } else {
            var { email, password } = req.body;
            const user = await help.find(email, password)
            if (user.length == 0) {
                return res.json({ status: 400, message: "Invalid user" });
            }
            let options = {
                id: user[0].id,
                email: user[0].email,
            };
            var token = await jwt.sign(options, 'secret')
            console.log(token);
            res.json({
                token: token,
            });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
}

exports.home = async (req, res) => {
    try {
        let id = req.activeUser;
        console.log(id);
        let data = await help.findOne(id.id)
        console.log(data);
        res.send(data)
    } catch (error) {
        res.send(error)
    }
}



