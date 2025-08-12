const express = require('express')
const Note = require('../models/note')
const router = express.Router()

router.get('/',async (req,res)=>{
    const filterTag = req.query.tag
    const query = filterTag ? {tags: filterTag} : {} 
    const notes = await Note.find(query).sort({ createdAt: -1 })
   res.render('index', { notes, filterTag });
})

router.get('/add', (req, res) => {
  res.render('addNote');
});

router.post('/add',async (req,res)=>{
    const {title, body, tags} = req.body
    const tagList = tags.split(',').map(tag => tag.trim().toLowerCase())
    const note = new Note({title, body, tags: tagList})
    await note.save()    
    res.redirect('/');
})

module.exports = router