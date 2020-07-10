import { Schema, model } from 'mongoose'
const schema = new Schema({
    nick_name: String,
    content: String
})

export default model('match_user', schema, 'match_user')