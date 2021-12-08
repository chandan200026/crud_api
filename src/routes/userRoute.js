const userRoute = require('express').Router();
const userController = require('../controllers/userController')
const expressValidator =  require("../validation/validation")
const auth = require('../middleware/auth')

userRoute.post('/register',expressValidator.UserRegister,userController.create)

userRoute.get('/login',expressValidator.UserLogin,userController.login);

userRoute.get('/home',auth,userController.home)
module.exports = userRoute