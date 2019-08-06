const express = require('express');
const router = express.Router();
const AuthService = require('../services/auth-service');
//User
router.post("/login", (req, res) => {
    AuthService.prototype
    .login(req.body)
    .then(user => {
        res.status(200).send(user);
    })
    .catch(err => {
        res.status(400).send(err);
    })
});
//Provider
router.post("/provider_login", (req, res) => {
    AuthService.prototype
    .provider_login(req.body)
    .then(user => {
        res.status(200).send(user);
    })
    .catch(err => {
        res.status(400).send(err);
    })
});

module.exports = router;
