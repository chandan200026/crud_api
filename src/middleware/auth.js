var jwt = require('jsonwebtoken');
// require('dotenv').config();
module.exports = (req, res, next) => {
    try {
        var bearer = req.headers.authentication.split(" ");
        token = bearer[1];
        var decode = jwt.verify(token, 'secret')
        req.activeUser = decode
        next()
    } catch (error) {
        res.status(401).json({
            status: 401,
            message: "Failed to authenticate token."
        })
    }
}