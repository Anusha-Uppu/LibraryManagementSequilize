// import author from '../models/authors';
const express=require('express');
const router=express.Router();
const Book=require('../models/books')
const bodyParser=require('body-parser')
router.get('/', async (req, res) => {
    try {
        // Fetch all authors include books
        const books = await Book.findAll();
        if (books.length === 0) return res.status(404).json({ message: "No Book Found" });
        res.json({Book: books});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});
// Get one book
router.get('/:id', async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        if (book === null) {
            return res.status(404).json({ message: "Book Not Found" });
        }
        res.json(book);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

// Create a new author
router.post('/', async (req, res) => {
    try {
       console.log(req.body)
       
        const book = await Book.create(req.body);
        res.json(book);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});

// Update an author
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await Book.update(req.body, {where: {id: req.params.id}});
        if (updated) {
            const updatedBook = await Book.findByPk(req.params.id);
            res.json(updatedBook);
        } else {
            res.status(404).json({ message: "Book Not Found" });
        }
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});
// Delete an author
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Book.destroy({where: {id: req.params.id}});
        if (deleted) {
            res.json({ message: "Book Deleted" });
        } else {
            res.status(404).json({ message: "Book Not Found" });
        }
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});
module.exports=router;