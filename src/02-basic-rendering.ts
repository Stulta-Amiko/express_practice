import express from 'express'
const app = express()
import {engine} from 'express-handlebars'

app.engine('handlebars',engine())
app.set('view engine', 'handlebars')
app.set('views','src/views')

app.get('/about', (req:any,res:any) => {
    res.render('about')
})

app.get('/error', (req:any,res:any) => {
    res.status(500)
    res.render('error')
})

app.get('/greeting',(req:any,res:any)=>{
    res.render('greeting',{
        message: 'Hello esteemed Programmer',
        style: req.query.style,
        userid: req.cookies.userid,
        username: req.session.username
    })
})

app.get('/no-layout',(req:any,res:any)=>{
    res.render('no-layout',{layout: null})
})

app.get('/custom-layout',(req:any,res:any)=>{
    res.render('custom-layout',{layout: 'custom'})
})

app.get('/text',(req:any,res:any) =>{
    res.type('text/plain')
    res.send('this is a test')
})

app.use((err:Error,req:any,res:any,next:any) =>{
    console.log('Server Error: '+err.message)
    res.status(500).render('08-error',{
        message: "클릭하지 마세요"
    })
})

app.use((req:any,res:any)=>{
    res.status(404).render('404')
})

app.disabled('x-powered-by')
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`\nnavigate to http://localhost:${port}/headers\n`)) 
