const express = require('express')
const path = require('path')
const blogs = require('../data/blogs')

const router= express.Router()  //to specify all routes

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../templates/index.html'))   //since index.html is inside template but template is outside the routes folder
})
router.get('/blog',(req,res)=>{
    res.sendFile(path.join(__dirname,'../templates/bloghome.html'))
    // blogs.forEach(element => {
    //     console.log(element.title)
    // });
    
})
router.get('/blogpost/:slug',(req,res)=>{
    myBlog= blogs.filter((e)=>{      
        return e.slug==req.params.slug
    })//if client requests blogpost/something and the something is one of the blogs then myblog will be the object
    console.log(myBlog)
    res.sendFile(path.join(__dirname,'../templates/blogPage.html'))
    
})


module.exports = router