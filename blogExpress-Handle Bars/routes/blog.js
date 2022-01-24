const express = require('express')
const path = require('path')
const blogs = require('../data/blogs')

const router= express.Router()  //to specify all routes

router.get('/',(req,res)=>{
    res.render('home')
})
router.get('/blog',(req,res)=>{
    res.render('blogHome',{
        blogs: blogs
    })
})
router.get('/blogpost/:slug',(req,res)=>{
    myBlog= blogs.filter((e)=>{      
        return e.slug==req.params.slug
    })//if client requests blogpost/something and the something is one of the blogs then myblog will be the object
    res.render('blogPage',{
        title: myBlog[0].title,   
        content: myBlog[0].content
    })
    
})


module.exports = router