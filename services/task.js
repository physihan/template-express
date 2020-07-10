const user = require("../models/user.js").default


module.exports = {
    taskList() {
        console.log(user.findOne({name:'xx'}))
        user.create({nick_name:'xxas'})
        return '123'
    }
}