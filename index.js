const express = require('express')
const path= require('path')
const app = express()
const port = 3000
// const sumantMidddleware = (req,res,next)=>{    //own middleare
//     console.log(req)
// }
app.use(express.static(path.join(__dirname,"public")))  //index.html inside public folder on home page using middelware
app.get('/hello', (req, res) => {
  res.send('Hello World, I am God!')
})
app.get('/hello/:name', (req, res) => {   //at hello/x it shows "Hello World, I am God! x"   x is a variable
  res.send('Hello World, I am God!' +" "+ req.params.name)   
})
app.get('/about', (req, res) => { 
  res.sendFile(path.join(__dirname,'index.html'))   //send a file instead of text, using path module
})
app.get('/json', (req, res) => { 
  res.json({"sumant": 69})   //send json
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})