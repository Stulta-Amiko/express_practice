import express from 'express'
//import * as expressHandlebars from 'express-handlebars'
const expressHandlebars = require('express-handlebars')
import {getFortune} from './lib/fortune'
const app = express()
const port = process.env.PORT || 3000

app.engine('handlebars',expressHandlebars({
    defaultLayout: 'main',
}))
app.use(express.static(__dirname + '/public'))

app.set('view engine', 'handlebars')



app.get('/',(req,res) => {res.render('home')})

app.get('/about',(req,res) => {
   // const RandomFortunes = fortunes[]
    res.render('about',{fortune: getFortune()})
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