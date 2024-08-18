// 1)core module - inbuilt - http
// 2)Local module - custom - user defined
// 3)Third-party module - npm download - npm install pkgname



// const http = require('http')
// const { add, sub, mul, div, mod,area } = require('./add')

// http.createServer((req, res) => {
//     res.write("Hello world!\n");
//     res.write("hello Mini !\n");
//     res.write("addition is ", +add(10, 5))
//     res.write("subtraction is ", +sub(12, 5))
//     res.write("multiplication is ", +mul(14, 5))
//     res.write("divide is ", +div(10, 5))
//     res.write("modulo is ", +mod(20, 5))
//     res.write("area of circle is  ", +area(25, 35))
//     console.log("Hello My first project on node js");
//     res.end();
// }).listen(3000,()=>{
//         console.log("listening on 3000 port");    
//   })

const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
})
app.get('/home', function (req, res) {
    res.send('<h1>My Home Page</h1>')
})
app.get('/about', function (req, res) {
    res.send('<h1>My About Page</h1>')
})

app.listen(3001);