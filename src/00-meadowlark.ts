import express from 'express'
const app = express()
const port = process.env.PORT || 3000

app.use((req:any,res:any)=>{
    res.type('text/plain')
    res.status(404)
    res.send('404 - Not Found')
})

app.use((err:Error,req:any,res:any,next:any) => {
    console.error(err.message)
    res.type('text/plain')
    res.status(500)
    res.send('500 - Internal Sever Error')
})

app.listen(port,() => console.log(
    `Express started on http://localhost:${port};` + `press Ctrl+C to Terminate.`
))