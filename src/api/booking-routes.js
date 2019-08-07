const express = require("express");
const router = express.Router(); 
const Booking = require("../models/bookings-model");

//CREATE, READ, UPDATE, DELETE USERS
router.get("/", (req, res) => {
    
    res.send("Hey!");
    // Booking.prototype.getBookings().then(bookings => {
    //     res.send(bookings);
    // }).catch(err => {
    //     res.send(err);
    // }); 
});

module.exports = router;
