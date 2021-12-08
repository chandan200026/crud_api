const {check} = require('express-validator')

exports.UserRegister = [
    check("firstname","min length 3 characters").notEmpty().withMessage("this feild is require"),
    check("lastname","min length 3 characters").notEmpty().withMessage("this feild is require"),
    check("email","min length 3 characters").isEmail(),
    check("password","min length 3 characters").notEmpty().withMessage("this feild is require")
]
exports.UserLogin = [
    check("email",).notEmpty().withMessage('email is required'),
    check("password").notEmpty().withMessage("password  is require")
]
