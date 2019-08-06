const express = require("express");
const router = express.Router(); 
const Listing = require("../models/listings-model.js");
const ListService = require("../services/list-service");
const Booking = require("../models/bookings-model");

// GET BOOKINGS
router.get("/booking", (req, res) => {
    Booking.prototype.getBookings().then(bookings => {
        res.send(bookings);
    }).catch(err => {
        res.send(err);
    }); 
});

//CREATE, READ, UPDATE, DELETE LISTINGS
router.get("/", (req, res) => {
    Listing.prototype.getListings().then(listings => {
        res.send(listings);
    }).catch(err => {
        res.send(err);
    }); 
});
//Get Listing By ID

//Create Listing

router.post("/"), (req, res) => {
    Listing.prototype.createListing(req.body).then(message => {
        res.status(200).send(message);
    }).catch(err => {
        res.send(err);
    })
}

//Delete Listing by ID
router.delete("/:id", (req, res) => {
    Listing.prototype.deleteListing(req.params.id).then(messaage => {
        res.status(200).send(message);
    }).catch(err => {
        res.send(err);
    }); 
});



router.post("/:id/bookings", (req,res)=>{
    Listing.prototype.createBooking(req.body, req.params.id).then(newBooking => {
        res.send(newBooking);
    }).catch(err => {
        res.send(err);
    }); 
})

router.post("/id", (req, res) => {
    Listing.prototype.getListingsID(req.body.id).then(users => {
        res.send(users);
    }).catch(err => {
        res.send(err);
    }); 
});
module.exports = router;