const express = require("express");
const router = express.Router(); 
const Listing = require("../models/listings-model");
//BEST PRACTICE ONE, IGNORE other listings routes file
//CREATE, READ, UPDATE, DELETE Listings

//Create Listing
router.post("/", (req, res) => {
    Listing.prototype.createListing(req.body).then(message =>{
        res.send(message);
    }).catch(err => {
        res.send(err);
    })
});

//Read Listings
router.get("/", (req, res) => {
    Listing.prototype.getListings().then(listings => {
        res.send(listings);
    }).catch(err => {
        res.send(err);
    }); 
});

//Get Listing by ID
router.get("/:id", (req, res) => {
    Listing.prototype.getListingsByID(req.params.id).then(listings => {
        res.send(listings);
    }).catch(err => {
        res.send(err);
    }); 
});

//Get Listing by Provider ID
router.get("/provider/:id", (req, res) => {
    Listing.prototype.getListingsbyProviderID(req.params.id).then(listings => {
        res.send(listings);
    }).catch(err => {
        res.send(err);
    }); 
});

//Update Listing
router.patch("/:id", (req, res) => {
    Listing.prototype.updateListing(req.body,req.params.id).then(message => {
        res.send(message);
    }).catch(err => {
        res.send(err);
    }); 
});
//Delete Listing by ID
router.delete("/:id", (req, res) => {
    Listing.prototype.deleteListing(req.params.id).then(messaage => {
        res.status(200).send(message);
    }).catch(err => {
        res.send(err);
    }); 
});
module.exports = router;