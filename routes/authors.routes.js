// import author from '../models/authors';
const express=require('express');
const router=express.Router();
const Author=require('../models/authors')
const bodyParser=require('body-parser');
const book = require('../models/books');
router.get('/', async (req, res) => {
    try {
        // Fetch all authors include books
        const authors = await Author.findAll();
        if (authors.length === 0) return res.status(404).json({ message: "No Authors Found" });
        res.render('authors',{authors})
        // res.json({Authors: authors});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});
// Get one author
router.get('/:name', async (req, res) => {
    try {
        const author = await Author.findAll({
            where:{
                name:req.params.name,
            }
    });
        if (author === null) {
            return res.status(404).json({ message: "Author Not Found" });
        }
        res.json(author);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});
//Post deatails of many authors
// router.post('/bulkcreate',async(req,res)=>{
//     try{
//         const authors=await Author.bulkCreate(req.body);
//         res.json(authors);
//     }
//     catch(err){
//         res.send('eeror'+err);
//     }
// })

// Create a new author
router.post('/', async (req, res) => {
    try {
       console.log(req.body)
        const aa=[{
            name:req.body.name,
             birth_year:req.body.birth_year,
             nationality:req.body.nationality

        }]
        const author = await Author.create(aa);
        res.json(author);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});

// Update an author
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await Author.update(req.body, {where: {id: req.params.id}});
        if (updated) {
            const updatedAuthor = await Author.findByPk(req.params.id);
            res.json(updatedAuthor);
        } else {
            res.status(404).json({ message: "Author Not Found" });
        }
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});
// Delete an author
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Author.destroy({where: {id: req.params.id}});
        if (deleted) {
            res.json({ message: "Author Deleted" });
        } else {
            res.status(404).json({ message: "Author Not Found" });
        }
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});
module.exports=router;