const express = require('express')
const fs = require('fs')
const Post = require('../models/Posts')
const path = require('path')
const router = express.Router()

router.get('/', async (req, res) => {
    if(req.query.id === undefined){
        res.json(await Post.find({}));
    }else{
        Post.find({_id: req.query.id}, async (err, content) =>{
            if(content === undefined){
                return res.sendStatus(400);
            }
            res.json(content);
        })
    } 
})

router.post('/', async (req, res) => {
    const post =  new Post({
        name: req.body.name,
        questions: []
    })

    if(!post.name){
        res.sendStatus(400);
    }else{
        await post.save();
        res.redirect(301, "localhost:8080/questions/question1");
    }
})

router.post('/question', async (req, res) => {
    let number = fs.readFileSync('./routes/count.txt', 'utf-8')
    //!POPRAVI OVO
    console.log(toString(parseInt(number)+1));
    fs.writeFileSync('./routes/count.txt', toString(parseInt(number)+1))
    res.redirect(301, 'localhost:8080/question'+2)
})

module.exports = router;