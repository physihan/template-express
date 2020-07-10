const user = require("../models/user.js").default

module.exports = {
    login() {
        user.findOne({ nickname: 'xihan1' }).then((result) => {
            console.log(result);
        }).catch((err) => {

        });
        user.create({ nickname: 'xxas' })

        return '123'
    }

}