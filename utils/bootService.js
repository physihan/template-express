
const user = require('./../services/user');
const fs = require('fs')
const path = require('path');

// for (let fileName of fileArr) {
//     fileName = fileName.replace(/\.js/, '')
//     if (fileName.indexOf('collection-') < 0)
//         continue
//     let collection = fileName.replace('collection-', '')
//     db[`${collection}ColPromise`] = require(`./${fileName}`)
// }

module.exports = function (app) {
    app.service = {}
    const filePath = path.resolve(__dirname, '../', 'services')
    const fileArr = fs.readdirSync(filePath)
    console.log('===========读取service目录===========');
    for (let i = 0; i < fileArr.length; i++) {
        const fileName = fileArr[i];
        app.service[fileName] = require(`${filePath}/${fileName}`)
        console.log(fileName)
    }
    console.log('===========挂载service成功===========');
    // app.service.user = user
}