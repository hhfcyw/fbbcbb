//回调函数的形式
const fs = require('fs')
// fs.readFile('asd.txt',( err,data) => {
//   if(err) throw err
//   console.log(data.toString())
// })

//promise形式
let p = new Promise((resolve,reject) => {
  fs.readFile('asd.txt',(err,data) => {
    if(err) reject(err)
    resolve(data)
  })
})

p.then(res => {
  console.log(res.toString())
},err => {
  console.log(err)
})