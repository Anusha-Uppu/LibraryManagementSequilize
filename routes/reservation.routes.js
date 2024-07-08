// import author from '../models/authors';
const express=require('express');
const router=express.Router();
const Reservation=require('../models/reservations');
const bodyParser=require('body-parser')
router.get('/', async (req, res) => {
    try {
        // Fetch all reservations
        const reservations = await Reservation.findAll();
        if (reservations.length === 0) return res.status(404).json({ message: "No Reservation Found" });
        res.json({Reservations: reservations});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});
// Get one reservation
router.get('/:id', async (req, res) => {
    try {
        const reservation = await Reservation.findByPk(req.params.id);
        if (reservation === null) {
            return res.status(404).json({ message: "Reservation Not Found" });
        }
        res.json(reservation);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

// Create a new author
router.post('/', async (req, res) => {
    try {
    //    console.log(req.body)
        const reservation = await Reservation.bulkCreate(aa);
        res.json(reservation);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});

// Update an author
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await Reservation.update(req.body, {where: {id: req.params.id}});
        if (updated) {
            const updatedReservation = await Reservation.findByPk(req.params.id);
            res.json(updatedReservation);
        } else {
            res.status(404).json({ message: "Reservation Not Found" });
        }
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});
// Delete an author
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Reservation.destroy({where: {id: req.params.id}});
        if (deleted) {
            res.json({ message: "Reservation Deleted" });
        } else {
            res.status(404).json({ message: "Reservation Not Found" });
        }
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});
module.exports=router;