const user = require('../services/user');
module.exports = {
    /** @type {RequestHandler}*/
    login: function (req, res) {
        res.send(user.login())
    }
}