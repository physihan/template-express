const mongoose = require('mongoose');
const user = require('../models/user.js').default;
const mongoDB = 'mongodb://localhost:27017/match';
// 取得默认连接

const connectDB = function () {
    mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection;

    // 将连接与错误事件绑定（以获得连接错误的提示）
    db.on('error', console.error.bind(console, 'MongoDB 连接错误：'));
//     db.on('success', () => {
    
// console.log('object');
//     })
    // const a = db.collection('match_user').find().then(res => {
    //     console.log(res);
    // })
    // user.find().then(res => {
    //     console.log(res);
    // })
    // console.log(a);
    return mongoose.connection
}

module.exports = {
    connectDB,
    mongoose
}