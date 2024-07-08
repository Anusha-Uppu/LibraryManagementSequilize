// import author from '../models/authors';
const express=require('express');
const router=express.Router();
const Member=require('../models/members');
const bodyParser=require('body-parser');
// const { MEDIUMINT } = require('sequelize');
router.get('/', async (req, res) => {
    try {
        // Fetch all authors include books
        const members = await Member.findAll();
        if (members.length === 0) return res.status(404).json({ message: "No Members Found" });
        res.json({Member: members});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});
// Get one author
router.get('/:id', async (req, res) => {
    try {
        const member = await Member.findByPk(req.params.id);
        if (member === null) {
            return res.status(404).json({ message: "Member Not Found" });
        }
        res.json(member);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

// Create a new member
router.post('/', async (req, res) => {
    try {
    //    console.log(req.body)
        
        const member = await Member.bulkCreate(req.body);
        res.json(member);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});

// Update an member
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await Member.update(req.body, {where: {id: req.params.id}});
        if (updated) {
            const updatedMember = await Member.findByPk(req.params.id);
            res.json(updatedAuthor);
        } else {
            res.status(404).json({ message: "Member Not Found" });
        }
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});
// Delete an member
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Member.destroy({where: {id: req.params.id}});
        if (deleted) {
            res.json({ message: "Member Deleted" });
        } else {
            res.status(404).json({ message: "Member Not Found" });
        }
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});
module.exports=router;