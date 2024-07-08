// import author from '../models/authors';
const express=require('express');
const router=express.Router();
const Loan=require('../models/loans')
const bodyParser=require('body-parser')
router.get('/', async (req, res) => {
    try {
        // Fetch all authors include books
        const loans = await Loan.findAll();
        if (loans.length === 0) return res.status(404).json({ message: "No Loans Found" });
        res.json({Loans: loans});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});
// Get one loan
router.get('/:id', async (req, res) => {
    try {
        const loan = await Loan.findByPk(req.params.id);
        if (loan === null) {
            return res.status(404).json({ message: "Loan Not Found" });
        }
        res.json(loan);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

// Create a new author
router.post('/', async (req, res) => {
    try {
    //    console.log(req.body)
        const loan = await Loan.bulkCreate(aa);
        res.json(loan);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});

// Update an author
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await Loan.update(req.body, {where: {id: req.params.id}});
        if (updated) {
            const updatedLoan = await Loan.findByPk(req.params.id);
            res.json(updatedLoan);
        } else {
            res.status(404).json({ message: "Loan Not Found" });
        }
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});
// Delete an author
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Loan.destroy({where: {id: req.params.id}});
        if (deleted) {
            res.json({ message: "Loan Deleted" });
        } else {
            res.status(404).json({ message: "Loan Not Found" });
        }
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});
module.exports=router;