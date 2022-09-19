import express from 'express'
//import * as expressHandlebars from 'express-handlebars'
const expressHandlebars = require('express-handlebars')
import {getFortune} from './lib/fortune'
import * as handlers from './lib/handlers'
const app = express()
const port = process.env.PORT || 3000

app.engine('handlebars',expressHandlebars({
    defaultLayout: 'main',
}))
app.use(express.static(__dirname + '/public'))

app.set('view engine', 'handlebars')



app.get('/',handlers.home)
app.get('/about',handlers.about)
app.use(handlers.notFound)
app.use(handlers.serverError)

app.listen(port,() => console.log(
    `Express started on http://localhost:${port};` + `press Ctrl+C to Terminate.`
))