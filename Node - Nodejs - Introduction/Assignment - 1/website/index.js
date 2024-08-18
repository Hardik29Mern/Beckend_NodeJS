let express = require ('express')
const path = require ('path')

let app = express()
app.set('view engine','ejs') // handlebar - hbs pug template engine

app.get('/' , (req,res) => {
    res.render('home')
})

app.get('/about' , (req,res) => {
    res.render('about')
})

app.get('/product' , (req,res) => {
    res.render('product')
})
app.get('/gallery' , (req,res) => {
    res.render('gallery')
})
app.get('/contact' , (req,res) => {
    res.render('contact')
})


app.listen(4001, () => {
    console.log('Listening on 4001 port...');
})