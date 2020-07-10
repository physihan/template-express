const { Schema, model } = require('mongoose')
const schema = new Schema({
    nick_name: String,
    content: String
})

module.exports= model('match_user', schema, 'match_user')