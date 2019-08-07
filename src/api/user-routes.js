const express = require("express");
const router = express.Router(); 
const User = require("../models/user-model");

//CREATE, READ, UPDATE, DELETE USERS
router.get("/", (req, res) => {
    User.prototype.getUsers().then(users => {
        res.send(users);
    }).catch(err => {
        res.send(err);
    }); 
});

//get user by ID
router.get("/:id", (req, res) => {
    User.prototype.getUserID(req.params.id).then(users => {
        res.send(users);
    }).catch(err => {
        res.send(err);
    }); 
});


//POSTING THE IMAGE

router.post("/image/:userId", (req, res) => {
    uploadService
      .upload(req, res)
      .then(() => {
        const userId = req.params.userId;
        const url = "http://localhost:3000/uploads/" + req.file.filename;
   
        userService
          .setImageUrl(userId, url)
          .then(user => {
            res.json({ user });
          })
          .catch(err => {
            res.status(400).json({ msg: err });
          });
      })
      .catch(err => {
        res.status(400).json({ msg: err });
      });
   });

router.post("/", (req,res)=>{
    User.prototype.createUser(req.body).then(users => {
        res.send(users);
    }).catch(err => {
        res.send(err);
    }); 
});
//update by ID insert id into req.body so ID=req.body.id
router.put("/", (req,res)=>{
    User.prototype.createUser(req.body).then(users => {
        res.send(users);
    }).catch(err => {
        res.send(err);
    }); 
});
//delete by ID
router.delete("/", (req,res)=>{
    User.prototype.deleteUser(req.body).then(users => {
        res.send(users);
    }).catch(err => {
        res.send(err);
    }); 
});




// router.post("/", (req,res)=>{
//     User.prototype.createUserJSON(req.body).then(users => {
//         res.send(users);
//     }).catch(err => {
//         res.send(err);
//     }); 
// });
module.exports = router;