import express from 'express'
//import * as expressHandlebars from 'express-handlebars'
const expressHandlebars = require('express-handlebars')
const app = express()
const port = process.env.PORT || 3000

app.engine('handlebars',expressHandlebars({
    defaultLayout: 'main',
}))
app.use(express.static(__dirname + '/public'))

app.set('view engine', 'handlebars')

const fortunes = [
    "Conquer your fears of they will conquer you.",
    "Rivers need springs",
    "Do not fear what you don't know",
    "You will have a pleasant surprise",
    "Whenever possivle, keep it simple"
]

app.get('/',(req,res) => {res.render('home')})

app.get('/about',(req,res) => {
    const RandomFortunes = fortunes[Math.floor(Math.random()*fortunes.length)]
    res.render('about',{fortune: RandomFortunes})
})


app.use((req:any,res:any)=>{
    res.status(404)
    res.render('404')
})

app.use((err:Error,req:any,res:any,next:any) => {
    console.log(err.message)
    res.status(500)
    res.render('500')
})

app.listen(port,() => console.log(
    `Express started on http://localhost:${port};` + `press Ctrl+C to Terminate.`
))