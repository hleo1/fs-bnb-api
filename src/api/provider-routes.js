const express = require("express");
const router = express.Router(); 
const Provider = require("../models/provider-model");

//CREATE, READ, UPDATE, DELETE Providers
//CREATE
router.post("/", (req,res)=>{
    Provider.prototype.createProvider(req.body).then(providers => {
        res.send(providers);
    }).catch(err => {
        res.send(err);
    }); 
});

//Get Provider by ID
router.get("/:id", (req, res) => {
    Provider.prototype.getProviderbyID(req.params.id).then(provider => {
        res.send(provider);
    }).catch(err => {
        res.send(err);
    }); 
});
// router.get("/", (req, res) => {
//     User.prototype.getUsers().then(users => {
//         res.send(users);
//     }).catch(err => {
//         res.send(err);
//     }); 
// });



// //update by ID insert id into req.body so ID=req.body.id
// router.put("/", (req,res)=>{
//     User.prototype.createUser(req.body).then(users => {
//         res.send(users);
//     }).catch(err => {
//         res.send(err);
//     }); 
// });

// //delete by ID
// router.delete("/", (req,res)=>{
//     User.prototype.deleteUser(req.body).then(users => {
//         res.send(users);
//     }).catch(err => {
//         res.send(err);
//     }); 
// });

module.exports = router;