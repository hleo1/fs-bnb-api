const express = require("express");
const router = express.Router(); 
const Booking = require("../models/bookings-model");

//CREATE, READ, UPDATE, DELETE Boookings
router.get("/", (req, res) => {
    Booking.prototype.getBookings().then(bookings => {
        res.send(bookings);
    }).catch(err => {
        res.send(err);
    }); 
});

//Get Booking by User ID
router.get("/user/:userid", (req, res) => {
    Booking.prototype.getBookingbyUserID(req.params.userid).then(bookings => {
        res.send(bookings);
    }).catch(err => {
        res.send(err);
    }); 
});

module.exports = router;
